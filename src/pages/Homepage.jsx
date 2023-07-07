import Pictures from "../compenents/Pictures";
import data from "../helpers/data";
import "./Homepage.css";

const Homepage = () => {
    // console.log(data);
    return (
        <div className="row gap-1 justify-content-center">
            {data.map((item) => {
                console.log(item);
                const { photographer, src } = item;
                return (
                    <div class="col col-sm-6 col-md-3 col-lg-2">
                        <div class=" card text-bg-light ">
                            <div class=" card-body  border border-3 rounded  text-center d-flex flex-column ">
                                <div className="image">
                                    {" "}
                                    <img
                                        src={src.large}
                                        class="card-img-top rounded-circle "
                                        alt="..."
                                        style={{ height: "268px" }}
                                    ></img>
                                </div>
                                <div>
                                    <h5 class="card-title">{photographer}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Homepage;
