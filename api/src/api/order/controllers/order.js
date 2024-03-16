
const stripe = require('stripe')("sk_test_51LVV9TSIAChIdT5GIwm9vsklCMNQkXMJDRz0hfPxw4EyZmcjlIqfTBx2s0MvlYoSUIeSriLqgvCJn3n7E29chtrx00pyTzZWtf");
'use strict';

/**
 * order controller
 */
const { createCoreController } = require('@strapi/strapi').factories;




module.exports = createCoreController("api::order.order",({strapi})=>({
  async create(ctx){
    const {products } = ctx.request.body;
    // console.log(products)
    if(!products){
      ctx.response.status = 400;
      return {error: "Cart not found in request body"}    
    }

    try{
    const lineItems = await Promise.all(
      products.map(async (product)=>{
        const item = await strapi
        .service("api::product.product")
        .findOne(product.id);

        return {
          price_data: {
            currency:"inr",
            product_data:{
              name: item.title
            },
            unit_amount: item.price * 100,
          },
          quantity: product.quantity,
        };
      })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {allowed_countries: ['IN']},
        payment_method_types: ["card"],
        mode: "payment",
        success_url: "http://localhost:5173/ecommercehome"+"?success=true",
        cancel_url: "http://localhost:5173/ecommercehome"+"?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: {  products, stripeId: session.id } });

      return { stripeSession: session };
      }

       catch (error) {
           ctx.response.status = 500;
            return { error };
       }
  }
   
}));