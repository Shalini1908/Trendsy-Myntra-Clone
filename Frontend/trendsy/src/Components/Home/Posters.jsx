import { Box, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { shortID } from '../short_key.generator';

const posterData = [
  {
    heading: 'DEAL OF THE DAY',
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/44a9b614-4f67-4b5a-89e5-ee50f7d5f8681676819472882-HRX_Activewear_Min_65_off.png',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/ea799980-8939-4dc3-8bbe-72b3f63ab8e31676819472832-Casual_Shoes_Min_40_Off.png',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/216f9bdf-e348-4e9d-b108-f22ceafbf4911676819472966-Starting_1299_2499.png',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/6ecb87f9-bd94-4c0a-a64b-4692197d6be21676819472939-Roadster-_Here_-_Now_-_more___Flat_70_off.png',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/18e8fbf9-7702-4f58-95a4-7cdb69850e641676819472892-Mango_Man-_Levi-s-____Flat_50_off.png',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/d3ab2a84-91c5-4137-b3b3-807b540bcc531676819472859-H-M-_USPA___STarting_399.png',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/cd86754f-29cc-4a42-b8f1-bce7218493031676819472927-Puma-_Nike_-_more_-min_40_off.png',
    ],
  },
  {
    heading: 'BEST OF MYNTRA EXCLUSIVE BRANDS',
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg',
    ],
  },
  {
    heading: 'TOP  PICKS',
    images: [
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg',
    ],
  },
  {
    heading: 'CATEGORIES TO BAG',
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg',
    ],
  },
  {
    heading: 'DEALS ON TOP BRANDS',
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/4abbda25-8d58-44f7-a986-c80fa31b08b31598892141513-Only.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/72af0092-fd16-4b61-b1fb-e617c089fe251598456566139-image_jpeg1938580873.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/9/5a5a162e-c4ad-4497-b995-a3c077d25df71596975348916-Women-s-Ethnic-Wear_Vishudh.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/da4935ce-8f3f-4273-bfbe-6ded783cf2131598948352513-Levis.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/0390ad1a-1262-4f7a-8f81-37c1644142a91598445950839-Sports---HRX-by-Hrithik-Roshan.png',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/697bb8c0-5c99-4d02-b0f9-d46ca72889db1602086685082-dressberrywomen.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/ff1358d9-6c6f-4fef-b169-d2875d43292c1602086685210-mhmen.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/28/529db52b-ba58-423a-9ad6-3161ef642dff1598605975128-Women-s-Ethnic-Wear---Anouk.png',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/7c774b84-f2ec-4a3f-9208-8ba663ee4c221602086685157-hereand-now-men.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c8f8c028-21c6-4b65-9d77-188378312e561598892141092-Cutecumber.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/99f75f40-4d3f-4049-87da-be2662359aca1602087172072-sangriawomen.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2021/11/12/2d4b2a2c-9332-4844-bb32-6ccf0e35fef21636697516790-Urbanic-1.jpg',
    ],
  },
  {
    heading: 'BRANDS AT SLASHED PRICES',
    images: [
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/8cd7ec33-78fe-4b40-802d-365238b1376e1644475927229-Sangria.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/8/5809282f-372d-4881-a8dc-95d5958a86be1644338988944-Roadster_HP.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/e8546602-b217-45b0-a2d4-9469ba59938f1644475927176-Chemistry.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/3cbf365e-8027-4aed-859b-6d40886418d21644475927244-Anouk--1-.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/af85f560-cd67-469a-8405-4ec64a33f9971644475927251-Dressberry.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/a0be607a-142c-4433-90ad-d13f22148f111644475927161-All-about-you.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/8/e96d85b8-7a62-4f57-898a-6c291ffb4d7f1644339048429-HRX_HP.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/b55aac85-4eb7-44d0-94bb-5077e8da70001644475927183-House-of-Pataudi.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/f3120cb8-1af3-40fa-b7ed-02466eb03def1644475927205-Kook-N-Keech.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/83ac07a7-65b3-4ede-a434-d9e3d103e3591644475927220-Moda-Rapido_1.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/fa16e2c8-d5af-4d71-8dfb-14484fd0db811644475927213-Moda-Rapido_2.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/40ddc119-a9bd-4117-ad8b-fc5bcc6a09141644475927190-ether.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/4900ccb0-86be-4fa4-806e-9cad9496e3db1644475927196-INVICTUS.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/fdbf3336-1777-46fd-aff6-7786268bc0d71644475927169-Harvard.jpg',
    ],
  },
  {
    heading: 'MYNTRA LUXE',
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/8c07792e-bbf9-4935-8d9c-3a6a66eba4f01636726166240-HP-DKNY.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/1cbf16e3-afe2-4013-af4d-4e427f1e30ee1636726166266-HP-Junghans.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/98b141e0-8d71-4e1b-8afa-49d1b7113a141636726166278-HP-Luxe.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/35f5db21-a813-4c1a-81e4-7ca2bc5a08351636726166290-HP-Oris.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/5158cd92-89b5-452e-97c5-938bdf63516e1636726166284-HP-Movado.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/a9d39733-2022-4964-8c22-6c9e43d8502a1636726166259-HP-Hackett.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/585ac7b3-36e3-4964-8707-a2249df2b1291636726166319-HP-versace.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/4fac3c61-9e54-486c-a083-6f61df81436c1623933299972-HPCarouselVisibility-MyntraLuxe-Tissot.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/65d5107e-35cf-4176-aef3-b7ae77dd09761636726166252-HP-FredPerry.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/9b04f96a-f1ed-4edc-8840-483719055fdb1623940080549-HPCarouselVisibility-MyntraLuxe-ExploreStore.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/6eaf8591-e92b-4ab3-a4e5-f38caac6c7d91636726166295-HP-POLORalphLauren.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/adf54639-1714-4935-8d22-ceef8ef1d8d31623940080665-HPCarouselVisibility-TheCollective-ExploreStore.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/7e273a5a-9372-4956-af96-38aa903668201636726166272-HP-KarlLagerfeld.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/884c0181-9da3-43c4-89f5-8696b97ec7751636726166246-HP-Dyson.jpg',
    ],
  },
  {
    heading: 'GIFTING CARDS',
    images: [
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/22/22b3c59a-fa16-434d-b2e1-d8779f1abe871661164884892-Gift-Card-Banner.png',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/ef1e7c6b-bec4-471c-9c36-72fffd975c0c1636738225251-happy-wedding.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/72f3fe20-f0a5-4894-852c-817b40b285291636738225244-happy-birthday.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/934a734c-ebb4-48c4-96d0-018e1e5eb7e21636738225215-milestones.jpg',
    ],
  },
  {
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/17209d4a-6c5e-4ba7-8d12-77b77dd3d04f1647340317606-SS22-KeyHighlights-Homedecor.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/6f5ef7a2-3562-4221-8f89-f7dd6c157bd31647340281629-SS22-KeyHighlights-TommyHilfiger.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/042e2643-e1af-435b-8e20-1afcbc171b3e1647340281452-SS22-KeyHighlights-Forever21.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/d48d0786-3f7c-4124-83a7-e414bc3ccd021647340317640-SS22-KeyHighlights-ModaRapido.jpg',

      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/3/348b6eba-104d-472e-90d3-a29cf315b9ed1646296933371-FirstonMyntra-Men-Campus.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/bb442c92-90d4-4c5e-99c3-aa5bf5a5dbae1647340391242-SS22-KeyHighlights-Women-ForeverNew.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/2ecfa799-6de6-425f-8578-3c59986d28951647340317709-SS22-KeyHighlights-Zeneme.jpg',
    ],
  },
  {
    heading: 'STYLECAST HOTTEST FINDS',
    images: [
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/fe3325dc-3293-4670-96c9-4449be4efad81647330317086-StyleCast-Mar-HP-DesiGirl.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/58386d41-5cd6-47f4-874c-d53f83075bf41647330317173-StyleCast-Mar-HP-InternationalBrands.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/23b20478-678e-4191-8245-84886f8094df1647330317259-StyleCast-Mar-HP-Urbanic.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/47f4c13c-a1a3-42f4-b9f6-02864f364b791647330317103-StyleCast-Mar-HP-EnglishSummer.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/ba8e2b64-3701-482a-b059-e1d3e8b96a221647330317190-StyleCast-Mar-HP-KeepItCasual.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/b3c39fe3-9ac4-42f0-b492-8575a2fc8ae21647330317225-StyleCast-Mar-HP-PartyInTheCity.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/1dceb1b3-90f5-49f0-8681-e08ee888911c1647330317155-StyleCast-Mar-HP-GlobalBrands.jpg',
    ],
  },
  {
    heading: 'TRENDS FOR HER',
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fabc0cd1-5535-4ea4-bf36-2b1857f2eb371645776096602-SS22-Trends-Women-Intricate-Threadwork.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/0d98cf21-4407-45e7-9b40-5f1fce278b6d1646753584544-SS22-TrendsForHer-Maxi-_-Mini-Dresses.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/2db05e12-4981-470f-a7cf-43355c4c3fb31646753584596-SS22-TrendsForHer-Tie-_-Dye-Sarees.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/1a66b994-5b88-4d40-b8d3-cff57b438d4a1646753584579-SS22-TrendsForHer-Summer-Sandals.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/6eed6ace-940e-47d4-8441-a362c2c4fba11647516398904-SS22-Trends-Women-Blouson-Tops.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/a39069f5-a7c9-4a57-81a0-bd6f5eb65b061645776096638-SS22-Trends-Women-Minimalist-Jewellery.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/80692309-98b1-4572-905b-6dcac3ecf32a1647516398938-SS22-Trends-Women-Gota-Patti-Kurtas.jpg',
    ],
  },
  {
    heading: 'TRENDS FOR HIM',
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/0df04bdd-853b-42fe-a494-00bc329ed1871645776676864-SS22-Trends-Men-Logo-Mania-Joggers.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/43ed9e78-f1d5-4398-94bd-db22cf7165e41646753693317-SS22-TrendsForHim-Textured-Shoes.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/2bd946cc-34f4-4958-91ed-91fa41eadd231646753693282-SS22-TrendsForHim-Colourblocked-Top-Wear.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/d158792a-f92a-4eac-b9b1-a0f54e8fd59d1647516418438-SS22-Trends-Men-Military-Inspired-Styles.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/bc7b623e-96e5-4811-8aba-679bf0c8ac401646753693245-SS22-TrendsForHim-Character-Tees.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/85821f6f-0cf0-4100-9527-af1e8e080ae31647516418456-SS22-Trends-Men-Multi-Pocket-Nehru-Jackets.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/21975168-2bdd-4f8d-9567-cb04a0132fbb1645776676882-SS22-Trends-Men-Logo-Mania-Tees.jpg',
    ],
  },
  {
    heading: 'BEST OF KIDSWEAR',
    images: [
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/0175ff89-fac8-46ba-856a-e95253fb0f501647247892132-Kurtas-_-Kurta-Sets.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/971db165-cf95-476c-89d7-e4c9e41be7f51647247892158-Top-Brands-----3.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/d7e692a5-e41d-4c1e-b50c-77d7d2f2ff101647247892167-Tops-_-Tees.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/b4c398d8-fa05-49a9-b92c-6a3385bd43d71647247892116-Dresses.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/d82a5429-eb15-4ae1-86f8-98cb62085d101647247892124-Kids-Wear.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/7df8be43-773d-4a93-9e51-e19200b13f641647247892149-Teens-Wear.jpg',
      'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/4b9cb7c1-f624-47e7-9345-50e334aacf5e1647247892141-Shorts-_-Skirts.jpg',
    ],
  },
  {
    heading: 'NEW IN TOP BRANDS',
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/1aaf5e6a-2978-4ed8-9634-1559f530d73b1645860227457-SS22-BestOfBrands-H_M.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3ce3c5e7-6060-4b15-b80b-6ddcd19d385a1645860227491-SS22-BestOfBrands-Max.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/96b79372-852b-4e41-904a-ffc47f840d171645860227477-SS22-BestOfBrands-Levis.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/426cb519-be57-4970-b23c-edb9e442cb761645860227551-SS22-BestOfBrands-W.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/823d5fd5-48e6-4eb1-bd66-1ea70306275a1645860227498-SS22-BestOfBrands-Metro.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fd730d26-ff9d-41e5-af2e-b20f71757b5f1645779089335-BestOfBrands-Nike.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/b69656bd-7766-45db-96ea-d45df19a7a361645860227484-SS22-BestOfBrands-LP.jpg',
    ],
  },
  {
    heading: 'LATEST IN BEAUTY & GROOMING',
    images: [
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/2c49ab74-5efa-4104-b71c-cdb4891762931645791174303-SS22-Beauty-Philips.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1850cdd3-e1be-47b3-ac4b-f8f395afce491645791174169-SS22-Beauty-Biotique.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/7f7c368a-fa16-44f9-b7a2-8562ec21ba0a1645791174190-SS22-Beauty-ColorBar.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/45b5535a-38c4-4c10-a301-3b6f3b56e43f1645791174266-SS22-Beauty-Lakme.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/b0ed0a6a-5b23-42d4-9dce-3fceb80ff68c1645791174229-SS22-Beauty-Himalaya.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/564b3c15-dba4-422e-acd5-72aac85b75541645791174149-SS22-Beauty-Beardo.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/f4330a78-6a11-4edc-bad9-dc03f02dec0e1645791174210-SS22-Beauty-FacesCanada.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/31253277-4623-43ed-9129-9b8015520e901645791174285-SS22-Beauty-Mamaearth.jpg',
    ],
  },
  {
    heading: 'COLOURS OF THE SEASON',
    images: [
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/53a0e7bc-64e7-4fb3-94fd-a1ada51fbefa1647516450800-SS22-Colours-Metallic-Hues.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/a6ef0785-eb3c-4726-a6ba-c09f6a44379c1647516450782-SS22-Colours-Elegant-Olive.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/65446aed-c0e9-4bab-af02-3e96c6ad7ab51646753796263-SS22-Colours-Cobalt.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3b1d43f4-46bf-4e3f-903b-ec5ca5c2bac91645860983331-SS22-Colours-Mens-BreezyWhite.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/96018800-d6b6-47e1-9998-62de5ce5c16a1647516450837-SS22-Colours-Soft-Pastels.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/389fe98d-b379-4816-9411-63624b03c0671647516450765-SS22-Colours-Electric-Lime.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/c1c00661-aff4-439e-9fd1-76982e7784831647516450875-SS22-Colours-Turquoise-Blue.jpg',
      'https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/3a8ac38f-76fe-4ee4-84fa-f9bd4947c4431647516450746-SS22-Colours-Coffee-Browns.jpg',
    ],
  },
  {
    heading: 'TOP INFLUENCERS EXCLUSIVE STYLES',
    images: [
      'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/c7fff41e-a426-4188-b319-bde1651f109e1647417948711-Studiocontent-HPBanner-Men-FestiveWearBythomson_19071gif.gif',
      'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ab0ac260-8f5d-4a64-a626-83b58129e3491647417948743-Studiocontent-HPBanner-Women-WeddingOutfitsBy-thankgod_itsfashion.gif',
      'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d210ddcf-73f4-4044-a75d-e8a6665fb9151647417948735-Studiocontent-HPBanner-Women-PartyLooksByiamartichauhan.gif',
      'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/8872ea7e-92a1-4be6-9706-d78845d480781647417948726-Studiocontent-HPBanner-Men-StreetWearByurban.lad.gif',
      // "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/462e80ef-51d4-4a81-a509-72d45ec7f6331647417948751-Studiocontent-HPBanner-Women-WorkWearBasicsByoutlanSrish.gif",
      //"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f6826795-22fa-4d40-8573-d5e1ee1178531647417948719-Studiocontent-HPBanner-MenGymBasicsByiakashchoudhary.gif"
    ],
  },
  {
    heading: 'TRENDING OUTFITS BY INFLUENCERS',
    images: [
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0d7a22b9-e201-44db-ba04-6dfba8ebd5061647418012721-Studiocontent-HPCarousel-Women-WesternWear.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d8bee915-9dbd-4cbb-9562-896dd16afdf31647418012563-Studiocontent-HPCarousel-Men-BeyondBasicsCasulaWear.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/fa1a37d5-db35-4df5-9f3b-dfeebf9a22bd1647418012703-Studiocontent-HPCarousel-Women-IndianWearGuide.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/843d4a44-833a-4179-a5a2-7f8c52bb1ef71647418012580-Studiocontent-HPCarousel-Men-FootwearFavouritesjpg.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ce751fad-7e3a-456d-87cd-457c6de7fccc1647418012597-Studiocontent-HPCarousel-Men-FormalWear.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0b6937a5-cf76-49c6-a3ab-551b7a17fafa1647418012686-Studiocontent-HPCarousel-Women-GymWear.jpg',
      'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/99b98dd2-83e4-4ac1-b2a5-b0bf8b81d62a1647418012633-Studiocontent-HPCarousel-Men-LoungeWear.jpg',
    ],
  },
];

//
//
// NEWNESS FOR EVERY OCCASION
// LATEST IN BEAUTY & GROOMING
// UNMISSABLE THIS SEASON
//
//
// BUDGET PICKS INFLUENCERS LOVE
//

const Posters = () => {
  return (
<>
  
    <Box m="15px">
      {posterData.map((ele, i) => (
        <Box key={shortID ()} al>
          {posterData[i].heading && (
            <Flex>
            <Heading fontSize="27px" m={'50px 0px 35px'} letterSpacing="5px">
              {posterData[i].heading}
            </Heading>
            </Flex>
          )}
          <SimpleGrid
            pt="15px"
            templateColumns={
              posterData[i].images.length % 4 == 0
                ? 'repeat(4,1fr)'
                : 'repeat(7,1fr)'
            }
            spacing="15px"
          >
            {posterData[i].images.map((image, i) => (
              <Box key={shortID ()}>
                <Image src={image} alt={i} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>

    </>
  );
};

export default Posters;
