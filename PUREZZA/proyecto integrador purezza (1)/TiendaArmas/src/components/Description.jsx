import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Description = ({ onViewAllProducts }) => {
  const [showMissionVision, setShowMissionVision] = useState(false);

  const toggleMissionVision = () => {
    setShowMissionVision(!showMissionVision);
  };

  return (
    <div style={{ fontFamily: "Georgia, serif" }}>
      <div style={{ textAlign: "center" }}>
        <img
          src="./pipe.png"
          alt="no funciona la imagen"
          style={{ width: "1000px", marginBottom: "29px", marginTop: "20px" }}
        />
      </div>
      <h2 style={{ marginLeft: "100px" }}>Productos Destacados</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "29px",
        }}
      >
        <div style={{ width: "500px" }}>
          <Carousel autoPlay>
            <div>
              <img
                src="https://www.purezzanatural.com/cdn/shop/products/IMG_7619.jpg?v=1680194977&width=360"
                alt="Imagen 1"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "40px",
                }}
              />
            </div>
            <div>
              <img
                src="https://www.purezzanatural.com/cdn/shop/products/5.png?v=1665609997&width=360"
                alt="Imagen 2"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "40px",
                }}
              />
            </div>
            <div>
              <img
                src="https://www.purezzanatural.com/cdn/shop/products/photo_5017464521735908171_y_1.jpg?v=1680195036&width=360"
                alt="Imagen 3"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "40px",
                }}
              />
            </div>
            <div>
              <img
                src="https://www.purezzanatural.com/cdn/shop/products/jabon2L.jpg?v=1637717186&width=360"
                alt="Imagen 4"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "40px",
                }}
              />
            </div>
            <div>
              <img
                src="https://www.purezzanatural.com/cdn/shop/products/IMG_5633.jpg?v=1680195245&width=360"
                alt="Imagen 5"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "40px",
                }}
              />
            </div>
            <div>
              <img
                src="https://www.purezzanatural.com/cdn/shop/products/IMG_5681.jpg?v=1680194954&width=360"
                alt="Imagen 6"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "40px",
                }}
              />
            </div>
          </Carousel>
          <button
            onClick={onViewAllProducts}
            style={{
              display: "block",
              margin: "20px auto",
              padding: "15px 20px",
              fontSize: "20px",
              backgroundColor: "#f6d5d2",
              color: "#c4544a",
              border: "none",
              borderRadius: "40px",
              cursor: "pointer",
            }}
          >
            Ver Todo
          </button>
        </div>

        <div
          style={{
            width: "50%",
            fontFamily: "Georgia, serif",
            marginLeft: "20px",
            marginTop: "-35px",
          }}
        >
          <button
            onClick={toggleMissionVision}
            style={{
              marginBottom: "1px",
              marginTop: "-200px",
              backgroundColor: "transparent",
              color: "inherit",
              border: "none",
              cursor: "pointer",
              fontSize: "30px",
            }}
          >
            Conócenos
          </button>
          {showMissionVision && (
            <div
              style={{
                padding: "20px",
                marginTop: "1px",
                fontFamily: "new roman, serif",
                width: "100%",
              }}
            >
              <h2>Misión</h2>
              <p>
                En Purezza, nuestra misión es ser una empresa líder en el
                mercado de productos para el cuidado facial, ofreciendo a
                nuestros clientes soluciones innovadoras y de alta calidad que
                promuevan la salud, la belleza y el bienestar de la piel. Nos
                comprometemos a proporcionar productos formulados con
                ingredientes naturales y efectivos, respaldados por la
                investigación científica más reciente, para garantizar
                resultados visibles y duraderos. Nuestro objetivo es brindar a
                nuestros clientes una experiencia única y personalizada, a
                través de una combinación de productos excepcionales y un
                servicio al cliente excepcional.
              </p>
              <h2>Visión</h2>
              <p>
                En Purezza, nuestra visión es convertirnos en la marca líder a
                nivel mundial en el cuidado facial, reconocida por la calidad
                excepcional de nuestros productos y la excelencia en el servicio
                al cliente. Nos esforzamos por ser una empresa innovadora y
                sostenible que establezca los estándares más altos en la
                industria del cuidado de la piel. Aspiramos a empoderar a las
                personas para que se sientan seguras y hermosas en su propia
                piel, al tiempo que promovemos prácticas éticas y respetuosas
                con el medio ambiente en cada aspecto de nuestro negocio.
                Buscamos establecer asociaciones estratégicas con expertos en
                dermatología y científicos de renombre para estar a la
                vanguardia de la investigación y el desarrollo de nuevos
                productos revolucionarios. Además, nos esforzamos por expandir
                nuestra presencia global, llegando a clientes en todo el mundo y
                ofreciendo soluciones personalizadas para abordar las
                necesidades únicas de cada piel.
              </p>
              <h2>Sobre nosotros</h2>
              <p>
                Toda la vida he tenido una piel sensible y tampoco era
                consciente del daño que me hacían los productos que usaba a
                diario. Por eso empecé a experimentar y remplacé todos esos
                ingredientes tóxicos por alternativas naturales y seguras. Cada
                uno de los ingredientes empleados en las formulaciones ha sido
                seleccionado con mucho amor y cuidado, siempre pensando en el
                bienestar de todos. Los productos son libres de crueldad animal
                y nunca encontrarás ingredientes como; Sulfatos, parabenos,
                fragancias sintéticas, colorantes, derivados petroquímicos,
                triclosán o cualquier otro ingrediente que se haya demostrado
                que puede afectar la salud o dañar el planeta. Purezza no es
                solo una empresa de productos para el cuidado de la piel. A
                través de Purezza quiero ayudar a crear consciencia sobre lo que
                usamos a diario y a crear hábitos más saludables para el cuidado
                de la piel, la salud y el planeta.
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "30px", marginTop: "20px" }}>
        <h2 style={{ marginLeft: "1px" }}>
          Cindy Vanegas, Fundadora de Purezza
        </h2>
        <img
          src="https://cdn.shopify.com/s/files/1/0021/2644/6641/files/IMG_6518_480x480.jpg?v=1689625426"
          alt="Imagen 1"
          style={{
            width: "40%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "40px",
          }}
        />
      </div>
    </div>
  );
};

export default Description;
