import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../Styles/productpage.css";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  // console.log(id);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount]=useState(1)

  const getData = () => {
    setLoading(true);
    // fetch("https://netmeddata.onrender.com/products")
    fetch(`https://odd-dog-pea-coat.cyclic.app/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  console.log(data)


  const handleCount=(value)=>
  {
    setCount(count+value)
  }







  if (loading) {
    return (
      <Box>
        <Center>
        <Image h='100vh' w='100wh' src="https://c4.wallpaperflare.com/wallpaper/284/923/646/minimalism-black-loading-typography-wallpaper-preview.jpg" alt='loading image'/>
        </Center>
      </Box>
    );
  }
  if (error) {
    return (
      <Box>
        <Center>
        <Image h='100vh' w='100wh' src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?w=2000" alt='error image'/>
        </Center>
      </Box>
    );
  }




  return (
    <Box>
      {/* Top head line */}
      <Box p={3} fontSize={["xs", "xs", "xs"]} h="auto" bgColor="gray.50">
        <Flex
          w="80%"
          margin="auto"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box>
            <Text color="gray" textAlign="left" alignItems='center'>
              Home <i class='bx bx-chevron-right'></i> Consumer Electronics <i class='bx bx-chevron-right'></i> Smart Electronics <i class='bx bx-chevron-right'></i> {data.subCategory} <i class='bx bx-chevron-right'></i> {data.brand}
            </Text>
          </Box>
          <Box mr={3}>
            <Flex alignItems="center">
              <Box>
                <Flex alignItems="center">
                  <Box mr={1}>
                    <i class="bx bx-envelope"></i>{" "}
                  </Box>
                  <Box>Contact Now</Box>
                </Flex>
              </Box>
              <Box ml={3}>
                <Flex alignItems="center">
                  <Box mr={1} color="gray">
                    <i class="bx bx-heart"></i>
                  </Box>
                  Favourite
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Image and Description */}
      <Box m="auto" w="80%">
        <SimpleGrid columns={[1, 1, 2]}>
          {/* Image  */}
          <Box w={["100%", "100%", "100%", "100%"]}>
            <Flex flexWrap="wrap" justifyContent="center" mt={7}>
              <Image
                h="100%"
                w="90%"
                src={data.image_url}
              />
            </Flex>
          </Box>

          {/* Description */}
          <Box w={["100%"]}>
            {/* Watch Title */}
            <Box w="90%" m="auto">
              <Box w="90%" mt={6}>
                <Text textAlign="left" fontSize="lg" fontWeight="bold">
                 {data.title}
                </Text>
              </Box>
              <br />

              <Box>
                <Text color="gray" textAlign="left">
                 Brand: {data.brand}
                </Text>
              </Box>
              <br />
              <Box bg="gray.50">
                <Text color="gray" p="20px 10px" textAlign="left">
                  Price : {data.price} 
                </Text>
              </Box>

              <Box mt="5">
                <Flex w={["100%"]}>
                  <Box w="fit-content">Color :</Box>
                  <Box
                    className="section-price-filter"
                    borderColor="gray.400"
                    // p="5px 20px"
                    ml={2}
                  >
                    <Center>
                      <Text p={1} cursor="pointer">Gold</Text>
                    </Center>
                  </Box>
                  <Box
                    className="section-price-filter"
                    borderColor="gray.400"
                    // p="5px 20px"
                    ml={2}
                  >
                    <Center>
                      <Text p={1}>Black</Text>
                    </Center>
                  </Box>
                </Flex>
              </Box>
              <Box mt="5" fontSize={["sm", "sm", "lg"]}>
                <Flex alignItems='center'>
                  <Box  w='fit-content'>Quantity :</Box>
                  <Box
                    ml="2rem"
                    // p="5px 20px"
                  >
                    <Center>
                      <Button bgColor='gray.300' mr='1' size='sm'  onClick={()=>handleCount(-1)} disabled={count===1}>-</Button>
                      <Button bgColor='gray.300' mr='1' size='sm' disabled>{count}</Button>
                      <Button bgColor='gray.300'  size='sm' onClick={()=>handleCount(1)} disabled={count===5}>+</Button>
                    </Center>
                  </Box>
                </Flex>
              </Box>
              <br />
              <br />

              <Box>
                <Button mr={2}>
                  <Flex alignItems="center">
                    <Box fontSize={['lg','lg','lg']} cursor="pointer">
                      <i class="bx bx-heart"></i>
                    </Box>
                    <Box ml="5px">favourite</Box>
                  </Flex>
                </Button>
                <Button>
                  <Flex alignItems="center">
                    <Box fontSize={['lg','lg','lg']} cursor="pointer">
                    <i class='bx bx-cart-alt'></i>
                    </Box>
                    <Box ml="5px">Add to Cart</Box>
                  </Flex>
                </Button>
              </Box>

              <br />

              <Box h="max-content" fontSize={["sm", "sm", "sm"]}>
                <SimpleGrid columns={[1, 1, 3, 6]}>
                 
                  <Box>
                    <Image
                      h="100%"
                      w="40px"
                      src="https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/VISA.png?imbypass=true"
                    />
                  </Box>
                  <Box>
                    <Image
                      h="100%"
                      w="40px"
                      src="https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/mc_vrt_opt_pos_73_2x.png?imbypass=true"
                    />
                  </Box>
                  <Box>
                    <Flex>
                      <Box>
                        <i class="bx bx-check-shield"></i>
                      </Box>
                      <Box>Tax Info</Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex>
                      <Box>
                        <i class="bx bx-shield-plus"></i>
                      </Box>
                      <Box>Price Protection</Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex>
                      <Box>
                        <i class="bx bx-info-circle"></i>
                      </Box>
                      <Box>Price Disclaimer</Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex>
                      <Box>
                        <i class="bx bx-edit-alt"></i>
                      </Box>
                      <Box>Report Item</Box>
                    </Flex>
                  </Box>
                </SimpleGrid>
              </Box>

              <Box></Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Description */}

      <br />
      <hr />

      <br />
      <Box>
        <Box w="90%" m="auto" bgColor="gray.50" borderBottom="2px solid orange">
          <Box w="fit-content" p={3} bgColor="yellow">
            <Text fontSize="xl" fontWeight="600">
              Description
            </Text>
          </Box>
        </Box>
        <br />

        <br />
        <Box textAlign="left" w="80%" m="auto">
          <Text fontSize="xl" fontWeight="600">
            Main Feature
          </Text>
          <hr />

          <br />

          <Box>
            <Text>{data.brand}</Text>
          </Box>

          <br />
          <br />
          <Box ml={5}>
            <ol>
              <li>Size:38.5*44.5*14mm</li>
              <li>Strap meterial:Silica gel</li>
              <li>Main screen:1.99-inch LCD 320*380</li>
              <li>BT 4.0 5.0 support bluetooth call</li>
              <li>Appearance material:Zinc alloy</li>
              <li>Charging mode:Wireless Charging</li>
              <li>Appearance material:Zinc alloy</li>
            </ol>
          </Box>

          <br />
          <br />

          <Box>
            <Text>More Functions :</Text>
            <br />
            <Text>
              Custom components multi-lingual, Custom watch face, Breathing
              exercise, message reminder, call rejection. time alarm, mobile
              phone
            </Text>
            <br />
            <Text>
              Rotate Button,music control, remote control camera, stopwatch,
              countdown, waterproof，find mobile phone, weather forecast, etc.
            </Text>

            <br />
            <br />
            <Text>How to use BT call :</Text>

            <br />
            <Text>
              The Bluetooth call function requires dual Bluetooth signal
              support, so you need to connect twice according to the
              instructions: ①Scan the QR code on the manual through the mobile
              phone browser, download the dedicated app, and turn on the mobile
              phone BT. Find and connect the ola esporte device in the app.
              Confirm binding ②Find the device in the Bluetooth of the mobile
              phone (check the device name in the watch to check the device
              information), and qevila select the connection and pairing
            </Text>

            <br />
            <br />
            <Text>Support Bluetooth call：</Text>
            <br />
            <Text>
              Mobile phone synchronization of frequently used contacts.
            </Text>
            <br />
            <Text>So you can just use the watch to make call and answer.</Text>

            <br />

            <br />
            <Text fontWeight="700">Specifications</Text>
            <br />

            <TableContainer width="max-content">
              <Table size={["sm", "sm", "sm"]}>
                <Tbody>
                  <Tr>
                    <Td>Battery Capacity</Td>
                    <Td>180MAH</Td>
                  </Tr>
                  <Tr>
                    <Td>Screen Type</Td>
                    <Td>IPS</Td>
                  </Tr>
                  <Tr>
                    <Td>Charging Time</Td>
                    <Td>2 - 3 Hours</Td>
                  </Tr>
                  <Tr>
                    <Td>Screen Size</Td>
                    <Td>1.99</Td>
                  </Tr>
                  <Tr>
                    <Td>Operating mode</Td>
                    <Td>Touch Screen, Press button</Td>
                  </Tr>
                  <Tr>
                    <Td>Alert type</Td>
                    <Td>Vibration</Td>
                  </Tr>
                  <Tr>
                    <Td>Bluetooth calling</Td>
                    <Td>
                      Phone call reminder, Answering, Dialing, Reject answer the
                      phone
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Screen Resolution</Td>
                    <Td>320*380</Td>
                  </Tr>
                  <Tr>
                    <Td>IP rating</Td>
                    <Td>IP67</Td>
                  </Tr>
                  <Tr>
                    <Td>Bluetooth distance </Td>
                    <Td>W/O obstacles 10m - 15m</Td>
                  </Tr>
                  <Tr>
                    <Td>Notification Type</Td>
                    <Td>Whatsapp, Wechat, Twitter, Facebook</Td>
                  </Tr>
                  <Tr>
                    <Td>Ram(memory)</Td>
                    <Td>32MB</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <br />
            <br />

            <Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/20f250678940.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/c6f1fe1d9a6e.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/b50d49088e29.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/b6c7f2c4a0ef.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/bb7b1aab4b5d.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/387cc1c9eb2a.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/664818462461.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/e6b3ff7100e7.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/d8aaf0ddd493.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/84c51ff062e2.jpg"
                  alt="specs"
                />
              </Box>
              <Box>
                <Image
                  src="https://des.gbtcdn.com/storage/desc/6878026654363611136/16653/60e19facab22.jpg"
                  alt="specs"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      <br />

      <Box w="90%" m="auto">
        <Box>
          <Text textAlign="left " fontSize="2xl" fontWeight="bold">
            Customer Reviews
          </Text>
          <br />

          <hr />
          <br />
          <Box>
            <Flex justifyContent="space-between">
              <Box fontSize="4xl" color="gray.200" fontWeight="bold">
                <Text textAlign="left">0</Text>
                <Flex>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </Flex>
              </Box>
              <Box>
                <Center>
                  <Text
                    border="1px solid black"
                    cursor="pointer"
                    bgColor="yellow.400"
                    fontWeight="bold"
                    borderRadius="5px"
                    p={3}
                  >
                    Write a Review
                  </Text>
                </Center>
              </Box>
            </Flex>
          </Box>

          <br />
          <br />
          <hr />
          <br />
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
