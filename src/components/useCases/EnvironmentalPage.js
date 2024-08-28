import { useContext, useEffect } from "react";
import ColorContext from "../../context/ColorContext";
import PageContext from "../../context/PageContext";
import { Link } from 'react-router-dom';



export default function EnvironmentalPage(){

    const { color, setColor } = useContext(ColorContext);
    const { page, setPage, activeTab, setActiveTab } = useContext(PageContext);
  
    const handleTabClick = (tabName, color, bgColor) => {
      setActiveTab(tabName);
      setColor({ color, bgColor });
      localStorage.setItem('kColor', color);
      localStorage.setItem('kBgColor', bgColor);
    };
  
    useEffect(() => {
      setPage('use-cases');
  
      // Ensure activeTab is set to default "Waterjet Technology" if not already set
      if (!activeTab) {
        handleTabClick("Waterjet Technology", "#32CBBB", "#0C191D");
      }
    }, [setPage, activeTab]);



    
    return <div className="card-container">
    <Link to="/ev1" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/environmental/ecf/ef1.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Environmental Tech1{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>




        <Link to="/ev2" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/environmental/ecf/ef2.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              Environmental Tech2{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>





    <Link to="/ev3" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/environmental/ecf/ef3.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              Environmental Tech3{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>





    <Link to="/ev4" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/environmental/ecf/ef4.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              Environmental Tech4{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>



        
    
        <Link to="/ev5" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/environmental/ecf/ef5.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
              Environmental Tech5{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>
  </div>
}