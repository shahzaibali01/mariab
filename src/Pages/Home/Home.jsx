import React from "react";

// Reactstrap:-
import { Card, CardTitle, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Data :-
import { useSelector } from "react-redux";

// CSS :-
import "./Home.scss";


const Home = () => {

  let brandsData = useSelector((state) => state.brandsData)

  return (
    <div className="main_home">
      <div className="all_machine">
        {brandsData?.map((e) => {
          return (
            <>
              <div className="machine">
                <div className="brand_title">{e.name}</div>
                <div className="card_box">
                  {e.stores.map((r) => {
                    let cameraStatus = r.floors.map((c) => c.cameras.some((d) => d.stream == "AVAILABLE"))


                    return (
                      <>
                        <Card className="card">
                          <CardTitle className="title">{r.name}</CardTitle>
                          <CardText className="sub_title">Status Store</CardText>
                          <div className="status">
                            <div style={{ borderColor: r.is_connected == true ? "#86e7ad" : "#ff6263" }} className="status_1"></div>
                            <div style={{ borderColor: ((new Date().getTime()) - (new Date(r.heatmap).getTime())) < r.heatmap_delay ? "#86e7ad" : "#ff6263" }} className="status_2"></div>
                            <div style={{ borderColor: ((new Date().getTime()) - (new Date(r.pos).getTime())) < r.pos_delay ? "#86e7ad" : "#ff6263" }} className="status_3"></div>
                            <div style={{ borderColor: cameraStatus.some((s) => s == true) ? "#ea883e" : "#ff6263" }} className="status_4"></div>
                            <div className="status_5"></div>
                          </div>
                        </Card>
                      </>
                    )
                  })}

                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
