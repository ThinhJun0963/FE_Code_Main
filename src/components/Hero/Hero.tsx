import { FaSearch } from "react-icons/fa";
import { useState } from "react";

interface HeroProps {
  styles: { [key: string]: string };
}

export default function Hero({ styles }: HeroProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      style={{
        height: "50vh",
        backgroundColor: "#062e74",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ paddingTop: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ paddingTop: "20px" }}>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>
              Ứng dụng đặt khám
            </p>
            <p style={{ fontSize: "25px" }}>
              Đặt khám với hơn 100 phòng khám trên SmileCare để có số thứ tự và
              khung giờ khám trước.
            </p>
            <div className={styles['input-wrapper']}>
              <input
                className={styles['input']}
                type="text"
                placeholder="Tìm kiếm phòng khám"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <FaSearch color="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}