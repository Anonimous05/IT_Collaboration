import React, {Component} from 'react';
import './settings.css';
import arrow from "../SignUp/arrow.svg";
import addUser from './add-user-male.png';
import check from './checkMark.svg';

class SettingsCompany extends Component {

  state = {
    user: JSON.parse(localStorage.getItem('user')),
    company: false,
    companyOrSpecialists: "company",
  }

  componentDidMount() {
    const btn1 = document.querySelector('.companyBtn');
    btn1.style.background = "white";
    btn1.style.color = "darkred";
    btn1.style.border = "3px solid black";
    btn1.style.fontSize = "20px";
    btn1.style.transform = "scale(1.1)";
  }

  companyBtnHandler = (btnName) => {
    const btn1 = document.querySelector('.companyBtn');
    const btn2 = document.querySelector('.specialistsBtn');
    if(btnName === "company"){
      this.setState({companyOrSpecialists: 'company'})
      btn2.style = null;
      btn1.style.background = "white";
      btn1.style.color = "darkred";
      btn1.style.border = "3px solid black";
      btn1.style.fontSize = "20px";
      btn1.style.transform = "scale(1.1)";
    }else{
      this.setState({companyOrSpecialists: 'specialists'})
      btn1.style = null;
      btn2.style.background = "white";
      btn2.style.color = "darkred";
      btn2.style.border = "3px solid black";
      btn2.style.fontSize = "20px";
      btn2.style.transform = "scale(1.1)";
    }
  }

  checkerHandler = (e) => {
    if(this.state.company === false){
      e.target.style.background = "darkred";
      this.setState({company: true});
    }else {
      e.target.style.background = "#ffffff";
      this.setState({company: false})
    }
  }

  greyBlocksHandler = (e) => {
    if(e.target.style.border){
      e.target.style = null
    }else {
      e.target.style.border = "2px solid black";
    }
  }

  render() {
    if(!this.state.user) return window.location.pathname = "/";
    return (
      <div className="SettingsContainer">
          <div className="navigation">
            <button className="companyBtn" onClick={() => this.companyBtnHandler('company')}>Company</button>
            <button className="specialistsBtn" onClick={() => this.companyBtnHandler('specialists')}>Specialists</button>
          </div>
        <div className="big_form_company">
          <div className="image_company">
            <div className="plus">
              +
            </div>
            <p>Add profile photo</p>
          </div>
            <div className="container_for_company">
              <div className="inputs_company">
                <div className="checker">
                  <div className="checker_input" onClick={this.checkerHandler}/>
                  <p>I am not a company, but i want to create vacancy and start work</p>
                </div>
                <div className="inputs_company">

                  <div className="input">
                    <p>Firstname</p>
                    <input type="text" placeholder={this.state.user.username}/>
                  </div>

                  <div className="input">
                    <p>Lastname</p>
                    <input type="text" placeholder={this.state.user.lastName}/>
                  </div>

                  <div className="input">
                    <p>Email</p>
                    <input type="text" placeholder={this.state.user.userEmail}/>
                  </div>

                  <div className="country">
                    <p className="Country">Country</p>
                    <div className="input">
                      <input type="text" placeholder={this.state.user.country}/>
                      <div className="select">
                        <img src={arrow} alt=""/>
                        <div className="options">
                          <p onClick={this.countryHandler}>Russia</p>
                          <p onClick={this.countryHandler}>Kazakhstan</p>
                          <p onClick={this.countryHandler}>Kyrgyzstan</p>
                          <p onClick={this.countryHandler}>Armenia</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="city">
                    <p className="City">City</p>
                    <div className="input">
                      <input type="text" placeholder={this.state.user.city ? this.state.user.city : ""}/>
                      <div className="select">
                        <img src={arrow} alt=""/>
                        <div className="options">
                          <p onClick={this.countryHandler}>Moscow</p>
                          <p onClick={this.countryHandler}>Almaty</p>
                          <p onClick={this.countryHandler}>Bishkek</p>
                          <p onClick={this.countryHandler}>Grozniy</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input">
                    <p>Address</p>
                    <input type="text" placeholder={this.state.user.address ? this.state.user.address : ""}/>
                  </div>

                  <div className="phone">
                    <p className="Phone">Phone</p>
                    <div className="input">
                      <input type="text" readOnly value={this.state.user.country === "Kyrgyzstan" ? "+996" :
                                                this.state.user.country === "Armenia" ? "+374" :
                                                this.state.user.country === "Russia" ? "+7":
                                                this.state.user.country === "Kazakhstan" ? "+7": ""
                      }/>
                      <input type="text" placeholder={this.state.user.numberForInput ? this.state.user.numberForInput : ""}/>
                    </div>
                  </div>
                  {this.state.companyOrSpecialists === "company" ? (
                    <>
                      {this.state.company === true ? (
                          <></>
                      ) : (
                          <>
                            <div className="input">
                              <p className="CompanyName">Company Name</p>
                              <input type="text"/>
                            </div>
                            <div className="input_2">
                              <p className="CompanyOwner">Owner Name</p>
                              <div>
                                <input type="text"/>
                                <input type="text"/>
                                <img src={addUser} alt=""/>
                              </div>
                            </div>
                            <div className="input_size">
                              <p>Company Size</p>
                              <input type="text"/>
                            </div>
                          </>
                      )}

                      <div className="input">
                        <p>Description</p>
                        <textarea/>
                      </div>

                      <div className="specialize">
                        <p className="specializeP">Choose the field in which you specialize</p>
                        <div className="input">
                          <input type="text"/>
                          <div className="select">
                            <img src={arrow} alt=""/>
                            <div className="options">
                              <p>Programmer</p>
                              <p>CEO programmer</p>
                              <p>Smm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                      <>
                        <div className="textarea_2">
                          <p>Professional <br/> overview</p>
                          <textarea/>
                        </div>

                        <div className="rate">
                          <p className="rateP">Hourly rate</p>
                          <div className="input">
                            <input type="text"/>
                            <div className="select">
                              <img src={arrow} alt=""/>
                              <div className="options">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="status">
                          <p className="statusP">Status</p>
                          <div className="input">
                            <input type="text"/>
                            <div className="select">
                              <img src={arrow} alt=""/>
                              <div className="options">
                                <p>Sub Catalog</p>
                                <p>Sub Catalog</p>
                                <p>Sub Catalog</p>
                                <p>Sub Catalog</p>
                                <p>Sub Catalog</p>
                                <p>Sub Catalog</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grey_container_1">
                          <p className="grey_container_1_title">Language <br/> Proficiency</p>
                          <div className="container_selects">
                            <div className="selects">
                              <select>
                                <option >English</option>
                                <option>Russian</option>
                                <option>Kyrgyzstan</option>
                                <option>Armenia</option>
                              </select>
                              <select>
                                <option>Professional Working Proficiency</option>
                                <option>Professional Working Proficiency</option>
                                <option>Professional Working Proficiency</option>
                              </select>
                            </div>
                            <div className="selects">
                              <select>
                                <option>Russian</option>
                                <option>English</option>
                                <option>Kyrgyzstan</option>
                                <option>Armenia</option>
                              </select>
                              <select>
                                <option>Native / Bilingual Proficiency</option>
                                <option>Professional Working Proficiency</option>
                                <option>Professional Working Proficiency</option>
                              </select>
                            </div>
                            <div className="plus">
                              <p>+</p>
                            </div>
                          </div>
                        </div>

                        <div className="grey_container_2">
                          <p className="grey_container_2_title">Education</p>
                          <div className="grey_2_inputs">
                            <div className="input">
                              <p>University / Collage</p>
                              <select>
                                <option hidden/>
                                <option>University</option>
                                <option>Collage</option>
                              </select>
                            </div>
                            <div className="input">
                              <p>Are of study</p>
                              <select>
                                <option hidden/>
                                <option>SubCatalog</option>
                                <option>SubCatalog</option>
                              </select>
                            </div>
                            <div className="input">
                              <p>Degree</p>
                              <select>
                                <option hidden/>
                                <option>SubCatalog</option>
                                <option>SubCatalog</option>
                              </select>
                            </div>
                            <div className="calendar">
                              <p>Admission year</p>
                              <div className="calendar_block">
                                <img src={check} alt=""/>
                              </div>
                            </div>
                            <div className="calendar">
                              <p>Graduation year</p>
                              <div className="calendar_block">
                                <img src={check} alt=""/>
                              </div>
                            </div>
                            <div className="description">
                              <p>Description</p>
                              <textarea/>
                            </div>
                          </div>
                          <div className="plus">
                            <p>+</p>
                          </div>
                        </div>

                        <div className="grey_container_2">
                          <p className="grey_container_2_title">Education</p>
                          <div className="grey_2_inputs">
                            <div className="input">
                              <p>Company name</p>
                              <select>
                                <option hidden/>
                                <option>Hogvards</option>
                                <option>Guider</option>
                              </select>
                            </div>
                            <div className="calendar">
                              <p>Start working</p>
                              <div className="calendar_block">
                                <img src={check} alt=""/>
                              </div>
                            </div>
                            <div className="calendar">
                              <p>End working</p>
                              <div className="calendar_block">
                                <img src={check} alt=""/>
                              </div>
                            </div>
                            <div className="calendar">
                              <p>Currently work</p>
                              <div className="calendar_block">
                                <img src={check} alt=""/>
                              </div>
                            </div>
                            <div className="country">
                              <p className="Country_grey">Country</p>
                              <div className="input">
                                <input type="text"/>
                                <div className="select">
                                  <img src={arrow} alt=""/>
                                  <div className="options">
                                    <p onClick={this.countryHandler}>Russia</p>
                                    <p onClick={this.countryHandler}>Kazakhstan</p>
                                    <p onClick={this.countryHandler}>Kyrgyzstan</p>
                                    <p onClick={this.countryHandler}>Armenia</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="description">
                              <p>Description</p>
                              <textarea/>
                            </div>
                          </div>
                          <div className="plus">
                            <p>+</p>
                          </div>
                        </div>

                      </>
                  )}
                  <div className="grey_blocks">
                    <div onClick={(e) => this.greyBlocksHandler(e)} className="grey_block"/>
                    <div onClick={(e) => this.greyBlocksHandler(e)} className="grey_block"/>
                    <div onClick={(e) => this.greyBlocksHandler(e)} className="grey_block"/>
                    <div onClick={(e) => this.greyBlocksHandler(e)} className="grey_block"/>
                    <div onClick={(e) => this.greyBlocksHandler(e)} className="plus"><p>+</p></div>
                  </div>
                </div>
              </div>
              <div className="save_button">
                <button>Save</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default SettingsCompany;