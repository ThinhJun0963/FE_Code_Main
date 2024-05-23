import { Box, Flex, Text, Input, HStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import "./Hero.css";
import { useState } from "react";

export default function Hero() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Box
      h={"50vh"}
      backgroundColor={"#1975dc"}
      justifyContent={"center"} // Add this line
      alignItems={"center"} // And this line
    >
      <Box pt={30}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
<<<<<<< HEAD
          <Box pt={20}>
            <Text fontSize={40} fontWeight="bold">
              Ứng dụng đặt khám
            </Text>
            <Text fontSize={25}>
              Đặt khám với hơn 100 phòng khám trên SmileCare để có số thứ tự và
              khung giờ khám trước.
            </Text>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Tìm kiếm phòng khám"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <FaSearch color="black" />
            </div>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
=======
            <Box pt={30}>
                <Flex
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box pt={20}>
                        <Text fontSize={40} fontWeight="bold">Ứng dụng đặt khám</Text>
                        <Text fontSize={25}>Đặt lịch khám ngay với hơn 100 phòng khám trên SmileCare để có số thứ tự ưu tiên và khung giờ khám lý tưởng, không cần chờ đợi lâu
                        </Text>
                        <div className='input-wrapper'>
                            <input type="text" placeholder="Tìm kiếm phòng khám" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                            <FaSearch color="black" />
                        </div>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
>>>>>>> c652150b00db0cc6417699bd8dd1b0ce1bb01b42
