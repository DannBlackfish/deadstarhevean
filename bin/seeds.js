const mongoose      = require('mongoose');
const Product        = require('../models/Product.model.js')

const DB_NAME = 'deadstarclothing'

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//DATA
const products = [
    {
      name: 
        'Amor Panty',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902352/deadstarclothing/product-image/_DSC0056_mxdu4o.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902351/deadstarclothing/product-image/_DSC0055_aoouum.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-panty_v9aoiv.jpg'],
      size: 
        ['Small', 'Medium', 'Large'],
      material: 
        "Soft lingerie Set, made with fresh mesh and original illustration by Dead Star Clothing",
      description:
        "Our Pink cute Version of this thong <3 As soft and comfy as always but in cute pink color with cutie bears and bunnies. Love is the best word to describe this cuteness.",
      collect: 
        'Peluchitos',
      price:
        42,
      category:
        'Lengerie'
    },
    {
      name: 
        'Set bralette and panties',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902349/deadstarclothing/product-image/_DSC0016_hdjxov.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902350/deadstarclothing/product-image/_DSC0017_ljeled.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902350/deadstarclothing/product-image/_DSC0018_jfqb4b.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902350/deadstarclothing/product-image/_DSC0019_nlhirn.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-panty_v9aoiv.jpg'],
      size: 
        ['Small', 'Medium', 'Large', 'Extra Large'],
      material: 
        "Soft lingerie Set, made with fresh mesh and original illustration by Dead Star Clothing",
      description:
        "This Lingerie set is super soft and fresh, very comfy Tonge and bralette, with a unique design made only by us, you'll look as a fucking angel with this. All it was inspired in nature beautiful colors, and Kirby aesthetic games <3.",
      collect: 
        'Heaven Bunnys',
      price:
        10,
      category:
        'Lengerie'
    },
    {
      name: 
        'Sunset Nightgown - Pink',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902350/deadstarclothing/product-image/_DSC0015_j6qqto.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-camisones_xjkhxw.jpg'],
      size: 
        ['Small', 'Medium', 'Large'],
      material: 
        "Soft nightgown made with pink and fresh mesh",
      description:
        "This mesh is just like super fresh, comfy and soft, it's like a friend for your skin. Use this baby nightgown in a beautiful night, you can match it with your Smoking Star robe for a Slumber party, or just for a perfect movies night.",
      collect: 
        'Heaven Bunnys',
      price:
        36,
      category:
        'Lengerie'
    },
    {
      name: 
        'Smoking Stars - Pink Robe',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902346/deadstarclothing/product-image/_DSC0022_ftetk4.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902347/deadstarclothing/product-image/_DSC0023_brlp00.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902352/deadstarclothing/product-image/medidas-bata_v5towy.jpg'],
      size: 
        ['Small', 'Medium', 'Large'],
      material: 
        "Satin pink robe with cute bear embroidery illustration by Dead Star Clothing",
      description:
        "Fresh and Soft Robe made of galaxies, Yass! Perfect for walking in your house as Debbie Adams, trying to kill her sugar daddy... And making slumber partys with your BFFs :P with a cup of wine, movies and pop corns.",
      collect: 
        'Heaven Bunnys',
      price:
        66,
      category:
        'Lengerie'
    },
    {
      name: 
        'Smoking Stars - Lilac Robe',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902351/deadstarclothing/product-image/_DSC0020_rvs04p.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902351/deadstarclothing/product-image/_DSC0021_zavo94.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902352/deadstarclothing/product-image/medidas-bata_v5towy.jpg'],
      size: 
        ['Small', 'Medium', 'Large'],
      material: 
        "Satin lilac robe with cute bear embroidery illustration by Dead Star Clothing",
      description:
        "Fresh and Soft Robe made of galaxies, Yass! Perfect for walking in your house as Debbie Adams, trying to kill her sugar daddy... And making slumber partys with your BFFs :P with a cup of wine, movies and pop corns. ",
      collect: 
        'Heaven Bunnys',
      price:
        66,
      category:
        'Lengerie'
    },
    {
      name: 
        'Flaming Bunnies - Lilac',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902346/deadstarclothing/product-image/_DSC0005_zecc0x.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902347/deadstarclothing/product-image/_DSC0006_q6gsti.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902347/deadstarclothing/product-image/_DSC0007_suysxp.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902349/deadstarclothing/product-image/_DSC0008_r99sjn.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-hoodie_krwx9y.jpg'],
      size: 
        ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
      material: 
        "Soft Hoodie 80% polyester with serigraphy and cute sparkle silver laces",
      descript:
        "This Hoodie is super soft, comfy and oversized,remember that when you select your size. This hoodie is perfect to go to the tianguis to think things, go to the 'paca' as a diva, and being 'paparatzeadx' as Briney Spears in your free relaxing days.",
      collection: 
        'Flaming Bunnies',
      price:
        66,
      category:
        'Hoodies'
    },
    {
      name: 
        'Flaming Bunnies - Pink',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902347/deadstarclothing/product-image/_DSC0009_rbu1zq.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902347/deadstarclothing/product-image/_DSC0010_y15dhv.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902348/deadstarclothing/product-image/_DSC0011_zysv9i.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902348/deadstarclothing/product-image/_DSC0012_lkbx5o.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-hoodie_krwx9y.jpg'],
      size: 
        ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large', 'XXL'],
      material: 
        "Soft Hoodie 80% polyester with serigraphy and cute sparkle golden-pink laces",
      description:
        "This Hoodie is super soft, comfy and oversized,remember that when you select your size. This hoodie is perfect to go to the tianguis to think things, go to the 'paca' as a diva, and being 'paparatzeadx' as Briney Spears in your free relaxing days.",
      collect: 
        'Flaming Bunnies',
      price:
        66,
      category:
        'Hoodies'
    },
    {
      name: 
        'Peluchitos Black Dress',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902351/deadstarclothing/product-image/_DSC0054_dleout.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902351/deadstarclothing/product-image/_DSC0052_ziieu0.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902351/deadstarclothing/product-image/_DSC0053_gbzjv9.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-bear-dress_w9pvlb.jpg'],
      size: 
        ['Small', 'Medium', 'Large'],
      material: 
        "Peluchitos Dress 95% Polyester 5% spandex, very soft Lycra perfect for your body <3",
      description:
        "Babe this dress is casual and perfect for any adventure! Movies, Parties, dinners, picnics with your friends, you'll feel confortable and gorgeous at the same time. And for sure all the draws in it are 100% original made in Dead Star Heaven.Remember every printdress can change a bit. There're no two equal",
      collect: 
        'Peluchitos',
      price:
        42.60,
      category:
        'Dresses and skirts'
    },
    {
      name: 
        'Peluchitos Pink Dress',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902352/deadstarclothing/product-image/_DSC0059_it4ako.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902352/deadstarclothing/product-image/_DSC0058_r33igx.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902354/deadstarclothing/product-image/_DSC0060_wtqxmx.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-bear-dress_w9pvlb.jpg'],
      size: 
        ['Small', 'Medium', 'Large'],
      material: 
        "Peluchitos Dress 95% Polyester 5% spandex, very soft Lycra perfect for your body <3",
      description:
        "Babe this dress is casual and perfect for any adventure! Movies, Parties, dinners, picnics with your friends, you'll feel confortable and gorgeous at the same time. And for sure all the draws in it are 100% original made in Dead Star Heaven. Remember every printdress can change a bit. there're no two equal.",
      collect: 
        'Peluchitos',
      price:
        42.60,
      category:
        'Dresses and skirts'
    },
    {
      name: 
        'Join the Cult-Pink',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902346/deadstarclothing/product-image/_DSC0001_zy6gao.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902346/deadstarclothing/product-image/_DSC0002_bhdcyv.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-shirt_ibjgjr.jpg'],
      size: 
        ['Small', 'Medium', 'Large'],
      material: 
        "100% cotton",
      description:
        "Join the Cult, 666, this limited edition shirt in collaboration with @LaWeraconW Illustration needs to be in your collection! Original Design.",
      collect: 
        'Join the Cult',
      price:
        16.50,
      category:
        'Shirt and top'
    },
    {
      name: 
        'Join The Cult- White',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902346/deadstarclothing/product-image/_DSC0003_ccvtrb.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902345/deadstarclothing/product-image/_DSC0004_pc9dop.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-shirt_ibjgjr.jpg'],
      size: 
        ['Small', 'Medium', 'Large'],
      material: 
        "100% cotton",
      description:
        "Join the Cult, 666, this limited edition shirt in collaboration with @LaWeraconW Illustration needs to be in your collection! Original Design.",
      collect: 
        'Join the Cult',
      price:
        16.50,
      category:
        'Shirt and top'
    },
    {
      name: 
        'Marshmallow Holo Top',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902349/deadstarclothing/product-image/_DSC0014_dsv3ge.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902354/deadstarclothing/product-image/medidas-top_jj2hga.jpg'],
      size: 
        ['Small', 'Medium', 'Large'],
      material: 
        "Holographic pink Top with spandex",
      description:
        "This is beautiful holographic, it's changes depends of light: silver, blue, and magenta sparkles, very sexy and cute top, perfect for a night club, dinner with friends or a beach day.Fresh top you'll love to match with your Marshmallow skirt or another cute skirt or jeans. Send us a Pic! we want to see you your awesome outfit.",
      collect: 
        'Marshamallow',
      price:
        15,
      category:
        'Shirt and top'
    },
    {
      name: 
        'Marshamallow Holo skirt',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902349/deadstarclothing/product-image/_DSC0013_ugpnej.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902354/deadstarclothing/product-image/medidas-skirt_t6fiex.jpg'],
      size: 
        ['Medium', 'Large'],
      material: 
        "Holographic pink Top with spandex",
      description:
        "This skirt isn't spandex, please remember that when you select your size. This is beautiful holographic, it's changes depends of light: silver, blue, and magenta sparkles, very sexy and cute skirt, perfect for a night club, dinner with friends or a beach day. Send us a Pic! we want to see you your awesome outfit.",
      collect: 
        'Marshamallow',
      price:
        17.50,
      category:
        'Dresses and skirts'
    },
    {
      name: 
        'Bad and Good Baby',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902348/deadstarclothing/product-image/_DSC0039_dwqxzo.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-earign-flames_xjq5yi.jpg'],
      material: 
        "Acrilyc lilac and pink printed earrings",
      description:
        "For my Duality Angels, the good and the bad babys, very lightweight earrings, use them in a very iconic outfit! Send Us a Pic! we want to see you your awesome outfit.",
      price:
        14,
      category:
        'Accesories'
    },
    {
      name: 
        'Bad Baby',
      image:
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902347/deadstarclothing/product-image/_DSC0034_ifnogx.jpg', 
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-earign-flames_xjq5yi.jpg'],
      material: 
        "Acrilyc lilac printed earrings",
      description:
        "If you're the goth bad baby you'll need this, very lightweight earrings, use them with a lot of black please! Send Us a Pic! we want to see you your awesome outfit.",
      price:
        14,
      category:
        'Accesories'
    },
        {
      name: 
        'Good Baby',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902349/deadstarclothing/product-image/_DSC0042_dgxjtw.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-earign-flames_xjq5yi.jpg'],
      material: 
        "Acrilyc pink printed earrings",
      description:
        "If you're the Kawaii cute baby you'll need this, very lightweight earrings, use them with a lot of Pink or black, or with a beautiful skirt and cute top <3 Send us a Pic! we want to see you your awesome outfit.",
      price:
        14,
      category:
        'Accesories'
    },
    {
      name: 
        'Pink Sunset Inferno Earrings',
      image: 
        ['https://res.cloudinary.com/dannblackfish/image/upload/v1614902348/deadstarclothing/product-image/_DSC0040_d9nt1o.jpg',
        'https://res.cloudinary.com/dannblackfish/image/upload/v1614902353/deadstarclothing/product-image/medidas-earign-flames_xjq5yi.jpg'],
      material: 
        "Acrilyc transparent printed earrings with pink flames",
      description:
        "If you're the badass baby or your group you'll need this, very lightweight earrings, use them with something really cute! Send Us a Pic! we want to see you your awesome outfit.",
      price:
        14,
      category:
        'Accesories'
    },
  ];
  
// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
Product.create(products)
  .then(productsFromDB => {
      console.log(`Created ${productsFromDB.length} products`);
      mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating product from the DB: ${err}`));