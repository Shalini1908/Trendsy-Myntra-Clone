import { Box, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CartNav from "../Components/Cart/CartNav"
import CartProducts from '../Components/Cart/CartProducts';
import CartCalculation from '../Components/Cart/CartCalculation';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const cartData = [
  {
    _id: '63f5bd630df5745a1c6b7cac',
    id: 1582842,
    title: 'Biba Women Blue Ikat Patterned Top',
    brand: 'Biba',
    size: 'L',
    product_type: 'Top',
    variant_price: 999,
    variant_mrp: 999,
    dominant_material: 'Cotton',
    care_instructions: 'Cotton  |  Machine-wash',
    actual_color: 'Blue',
    dominant_color: 'Blue',
    images: [
      'http://assets.myntassets.com/v1/assets/images/1582842/2016/10/20/11476960301845-Biba-Women-Blue-Printed-Regular-Top-4681476960301498-1.jpg',
      'http://assets.myntassets.com/v1/assets/images/1582842/2016/10/20/11476960301826-Biba-Women-Blue-Printed-Regular-Top-4681476960301498-2.jpg',
      'http://assets.myntassets.com/v1/assets/images/1582842/2016/10/20/11476960301805-Biba-Women-Blue-Printed-Regular-Top-4681476960301498-3.jpg',
      'http://assets.myntassets.com/v1/assets/images/1582842/2016/10/20/11476960301773-Biba-Women-Blue-Printed-Regular-Top-4681476960301498-4.jpg',
      'http://assets.myntassets.com/v1/assets/images/1582842/2016/10/20/11476960301748-Biba-Women-Blue-Printed-Regular-Top-4681476960301498-5.jpg',
    ],
    type: 'Clothing/Women/Tops/Biba/More by Biba',
    ideal_for: 'Women',
    is_in_stock: 'Out of Stock',
    qty: 2,
    __v: 0,
  },
  {
    _id: '63f5bd630df5745a1c6b7cad',
    id: 7533652,
    title:
      'K&U Girls Blue & Orange Printed Ready to Wear Lehenga & Blouse with Dupatta',
    brand: 'K&U',
    size: '3-4Y',
    product_type: 'Lehenga & Blouse with Dupatta',
    variant_price: 3199,
    variant_mrp: 3199,
    dominant_material: 'Net',
    care_instructions:
      'Blouse fabric: Net | Lehenga fabric: Silk | Dupatta fabric: Net',
    actual_color: 'Blue | Orange',
    dominant_color: 'Blue',
    images: [
      'http://assets.myntassets.com/v1/assets/images/7533652/2018/10/5/736593b1-ae50-4743-89ef-a2b93d79a4b31538736791995-KU-Girls-designer-fashion-premium--Blue-and-Peach-Printed-Lehenga-Choli-2941538736791797-1.jpg',
      'http://assets.myntassets.com/v1/assets/images/7533652/2018/10/5/01721255-9fb1-4bc6-b5b0-79f48ab03d4c1538736791967-KU-Girls-designer-fashion-premium--Blue-and-Peach-Printed-Lehenga-Choli-2941538736791797-2.jpg',
      'http://assets.myntassets.com/v1/assets/images/7533652/2018/10/5/296324bf-3df0-4727-b279-6d9bd7e72cc71538736791933-KU-Girls-designer-fashion-premium--Blue-and-Peach-Printed-Lehenga-Choli-2941538736791797-3.jpg',
      'http://assets.myntassets.com/v1/assets/images/7533652/2018/10/5/fe069820-47cc-400c-b0bf-aed5fcf62ab01538736791904-KU-Girls-designer-fashion-premium--Blue-and-Peach-Printed-Lehenga-Choli-2941538736791797-4.jpg',
      '',
    ],
    type: 'Clothing/Girls/Lehenga Choli/K&U/More by K&U',
    ideal_for: 'Girls',
    is_in_stock: 'Out of Stock',
    qty:4,  
      __v: 0,
  },
  {
    _id: '63f5bd630df5745a1c6b7cae',
    id: 8223825,
    title: 'YK Girls Yellow & Pink Solid Kurta with Salwar and Waistcoat',
    brand: 'YK',
    size: '6-7Y',
    product_type: 'Kurta with Salwar and Waistcoat',
    variant_price: 1249,
    variant_mrp: 2499,
    dominant_material: 'Silk',
    care_instructions:
      'Top fabric: Art Silk | Bottom fabric: Art Silk | Dry-clean',
    actual_color: 'Yellow | Pink',
    dominant_color: 'Yellow',
    images: [
      'http://assets.myntassets.com/v1/assets/images/8223825/2018/12/21/a11f015f-1490-4616-bb87-77ce5813c2b21545390204614-YK-Girls-Kurta-Sets-9721545390202454-1.jpg',
      '',
      '',
      '',
      '',
    ],
    type: 'Clothing/Girls/Kurta Sets/YK/More by YK',
    ideal_for: 'Girls',
    is_in_stock: 'In Stock',
    qty: 2,
    __v: 0,
  },
];
const numbers = [0 ,2, 7, 10, 15, 21, 30]

const Cart = () => {
  const {isAuth}=useSelector((store)=>store)
    const navigate=useNavigate()
    const [cart,setCart]=useState([])
    const [data, setData] = useState([]);
   
    if(!isAuth){
      navigate("/login")
    }
    useEffect(() => {
      //console.log(cartData[0])
   const createdData =cartData.map((el,i)=>{
    return{...el,day:numbers[ Math.floor(Math.random() * numbers.length)]}
  })
      setData(createdData)
      setCart(createdData);
    }, []);
    return (
      <Box>
        <CartNav />
  
        <Grid
          justifyContent={'center'}
          gap={['5px', null, null, '15px']}
          templateColumns={['auto', null, 'auto auto']}
        >
          <GridItem maxW={['300px',  '500px']}>
            <CartProducts  cart={cart}setCart ={setCart} data={data} setData={setData}/>
          </GridItem>
          <GridItem maxW={['300px', '400px']}>
            <CartCalculation cart={cart} />
          </GridItem>
        </Grid>
        </Box>)
}

export default Cart