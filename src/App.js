import logo from './logo.svg';
import './App.css';
import mainpic from './assets/images/main-card.png'
import img_1 from './assets/images/card1pic.png'



function App() {
  return (
    <div className="App">
      <div className="container">
        <p className="fs_36 fw_600 black text_align ff_hind mb-30">Featured Product</p>
        <div className="row js_center">
          <div className="col_12 col_xl_5 js_center mb-30 d_flex">
            <img className="w_pic_100 w-xl-100" src={mainpic} />
          </div>
          <div className="col_12 col_xl_7">
            <div className="row">
              <div className="col_12 col_md_6 d_flex js_center js_xl_end">
                <div className="box-2 w-300px">
                  <img className="w-100-sm" src={img_1} />
                  <p className="fs_16 fw_400 ff_open p-text max-width">Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div className="d_flex align_center js_space_between">
                    <p className="fs_24 fw_600 ff_hind  text_clr">$169.99</p>
                    <p className="fs_16 fw_400 ff_hind strick_through gray">$199.99</p>
                    <button className="add_btn fs_16 fw_600 ff_hind">ADD CART</button>
                  </div>
                </div>
              </div>
              <div className="col_12 col_md_6 d_flex js_center js_xl_end mt-30-md">
                <div className="box-2 w-300px">
                  <img className=" w-100-sm" src={img_1} />
                  <p className="fs_16 fw_400 ff_open p-text max-width">Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div className="d_flex align_center js_space_between">
                    <p className="fs_24 fw_600 ff_hind  text_clr">$59.99</p>
                    <p className="fs_16 fw_400 ff_hind strick_through gray">$199.99</p>
                    <button className="add_btn fs_16 fw_600 ff_hind">ADD CART</button>
                  </div>
                </div>
              </div>
              <div className="col_12 col_md_6 d_flex js_center js_xl_end mt-30">
                <div className="box-2 w-300px">
                  <img className="w-100-sm" src={img_1} />
                  <p className="fs_16 fw_400 ff_open p-text max-width">Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div className="d_flex align_center js_space_between">
                    <p className="fs_24 fw_600 ff_hind  text_clr">$159.99</p>
                    <p className="fs_16 fw_400 ff_hind strick_through gray">$199.99</p>
                    <button className="add_btn fs_16 fw_600 ff_hind">ADD CART</button>
                  </div>
                </div>
              </div>
              <div className="col_12 col_md_6 d_flex js_center js_xl_end mt-30">
                <div className="box-2 w-300px">
                  <img className="w-100-sm" src={img_1} />
                  <p className="fs_16 fw_400 ff_open p-text max-width">Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div className="d_flex align_center js_space_between">
                    <p className="fs_24 fw_600 ff_hind  text_clr">$59.99</p>
                    <p className="fs_16 fw_400 ff_hind strick_through gray">$199.99</p>
                    <button className="add_btn fs_16 fw_600 ff_hind">ADD CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
