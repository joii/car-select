import React, { Component } from "react";

export default class CarDetail extends Component {
  carList = [
    {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "images-black/images-black-1/",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
    {
      id: 2,
      title: "Modern Steel",
      type: "Metallic",
      img: "./images/icons/icon-steel.jpg",
      srcImg: "images-steel/images-steel-1/",
      color: "Steel",
      price: "20,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-steel/images-steel-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-steel/images-steel-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-steel/images-steel-3/",
        },
      ],
    },
    {
      id: 3,
      title: "Lunar Silver",
      type: "Metallic",
      img: "./images/icons/icon-silver.jpg",
      srcImg: "images-silver/images-silver-1/",
      color: "Silver",
      price: "21,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-silver/images-silver-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-silver/images-silver-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-silver/images-silver-3/",
        },
      ],
    },
    {
      id: 4,
      title: "Rallye Red",
      type: "Metallic",
      img: "./images/icons/icon-red.jpg",
      srcImg: "images-red/images-red-1/",
      color: "Red",
      price: "22,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-red/images-red-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-red/images-red-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-red/images-red-3/",
        },
      ],
    },
  ];

  renderCarList = (id) => {
    return this.carList.filter((car) => car.id === id).map((car, index) => {
      const {
        color,
        price,
        engineType,
        displacement,
        horsepower,
        torque,
        redline,
      } = car;
      return (
        <table class="table">
            <tbody>
                <tr>
                    <td>Color</td>
                    <td>{color}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{price}</td>
                </tr>
                <tr>
                    <td>Engine Type</td>
                    <td>{engineType}</td>
                </tr>
                <tr>
                    <td>Displacement</td>
                    <td>{displacement}</td>
                </tr>
                <tr>
                    <td>Horsepower</td>
                    <td>{horsepower}</td>
                </tr>
                <tr>
                    <td>Torque</td>
                    <td>{torque}</td>
                </tr>
                <tr>
                    <td>Redline</td>
                    <td>{redline}</td>
                </tr>
                
            </tbody>
        </table>
        
        
      );
    });
  };

  render() {
    return(
    <div>
        <h1 className="text-center">CAR DETAIL</h1>
        <div id="carDetail"></div>
        

    </div>);
  }
}
