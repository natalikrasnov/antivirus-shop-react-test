
export const productsInitialState = [
  {
    img: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/2d9f9134-96d0-11e6-bf8f-00163ec9f5fa/1668108117/avast-Avast_Free_Antivirus_3D_Simplified_white_Box_right.png",
    description: "Award-winning protection, and free forever",
    benefits: [
      "Top antivirus: blocks spyware, adware, ransomware, etc.",
      "Real-time protection & updates",
      "Light and fast: doesn’t slow down your PC",
    ],
    rate: 9.8,
    reviews: 156825,
    compatibility: ["apple", "ios", "windows", "android"],
    website: "https://www.avast.com/en-us/index#pc",
    isRecommended: true
  },
  {
    img: "https://www.quickheal.co.in/pub/media/catalog/product/a/v/avpro-v22.png",
    description: "Award-winning protection, and free forever",
    benefits: [
      "Includes a VPN and email security",
      "Blocks threats and repairs files in real time",
      "Monthly and annual plans",
    ],
    rate: 9.4,
    reviews: 156825,
    compatibility: ["apple", "ios", "windows", "android"],
    website: "https://www.mcafee.com/"
  },
  {
    img: "https://www.quickheal.co.in/pub/media/catalog/product/t/o/total-security-v22.png",
    description: "Award-winning protection, and free forever",
    benefits: [
      "24/7 customer support",
      "Offers plans for unlimited devices",
      "Low-cost introductory pricing"
    ],
    rate: 9.0,
    reviews: 156825,
    compatibility: ["apple", "ios", "windows", "android"],
    website: "https://www.f-secure.com/us-en"
  },
];

const ProductsReducer = (products, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return products.concat(action.product);
        case 'SET_PRODUCT':
          return [...action.products];
      case 'SEARCH_PRODUCTS':
        if (action.filter === '') return products.products? products.products : products
        return {
          filtered: products.products
            ? products.products.filter((element) =>
                JSON.stringify(element).includes(action.filter)
              )
            : products.filter((element) =>
                JSON.stringify(element).includes(action.filter)
              ),
          products: products.products ?  products.products : products,
        };
        default:
            return [...products]
    }
}

export default ProductsReducer