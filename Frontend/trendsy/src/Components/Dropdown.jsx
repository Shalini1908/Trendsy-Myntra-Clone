import { Box, Text, VStack } from '@chakra-ui/react';

const color = {
  men: 'tomato',
  women: 'pink',
  kids: 'orange',
  'home & living': 'yellow',
  beauty: 'teal',
};
const dropDownData = {
  men: {
    Topwear: [
      'T-Shirts',
      'Casual Shirts',
      'Formal Shirts',
      'Sweatshirts',
      'Sweaters',
      'Jackets',
      'Blazers & Coats',
      'Suits',
      'Rain Jackets',
    ],
    'Indian & Festive Wear': [
      'Kurtas & Kurta Sets',
      'Sherwanis',
      'Nehru Jackets',
      'Dhotis',
    ],
    Bottomwear: [
      'Jeans',
      'Casual Trousers',
      'Formal Trousers',
      'Shorts',
      'Track Pants & Joggers',
    ],
    'Innerwear & Sleepwear': [
      'Briefs & Trunks',
      'Boxers',
      'Vests',
      'Sleepwear & Loungewear',
      'Thermals',
    ],
    'Plus Size': [],
    Footwear: [
      'Casual Shoes',
      'Sports Shoes',
      'Formal Shoes',
      'Sneakers',
      'Sandals & Floaters',
      'Flip Flops',
      'Socks',
    ],
    'Personal Care & Grooming': [],
    'Sunglasses & Frames': [],
    Watches: [],
    'Sports & Active Wear': [
      'Sports Shoes',
      'Sports Sandals',
      'Active T-Shirts',
      'Track Pants & Shorts',
      'Tracksuits',
      'Jackets & Sweatshirts',
      'Sports Accessories',
      'Swimwear',
    ],
    Gadgets: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers'],
    'Fashion Accessories': [
      'Wallets',
      'Belts',
      'Perfumes & Body Mists',
      'Trimmers',
      'Deodorants',
      'Ties, Cufflinks & Pocket Squares',
      'Accessory Gift Sets',
      'Caps & Hats',
      'Mufflers, Scarves & Gloves',
      'Phone Cases',
      'Rings & Wristwear',
      'Helmets',
    ],
    'Bags & Backpacks': [],
    'Luggages & Trolleys': [],
  },
};

const Dropdown = () => {
  const category = 'men';

  return (
    <VStack
      border="1px solid red"
      h="420px"
      p="15px"
      fontWeight="500"
      wrap="wrap"
      justify="flex-start"
      w="70%"
    >
      {Object.keys(dropDownData[category]).map((subCategory, i) => (
        <Box align="start" fontSize="xs" w="20%">
          <Text color={color[category]}>{subCategory}</Text>
          {Object.keys(subCategory).map(ele => (
            <Text _hover={{ fontWeight: 'black' }} cursor="pointer" m="5px">
              {dropDownData.men[subCategory][ele]}
            </Text>
          ))}
          <Box border="0.01px solid gray" w="60%" mt="7px " />
        </Box>
      ))}
    </VStack>
  );
};

export default Dropdown;
