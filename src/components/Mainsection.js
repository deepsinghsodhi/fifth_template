import React from 'react'
import '../css/Mainsection.css'
import girl from '../images/girl.png'
import myprofile from '../images/myprofile.png'
import enrolled from '../images/enrolled.png'
import wishlist from '../images/wishlist.png'
import review from '../images/review.png'
import purchase from '../images/purchase.png'
import settings from '../images/settings.png'
import logout from '../images/logout.png'
import camera from '../images/camera.png'
import { Table } from 'reactstrap';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function MainSection() {
    return (
        <div className=''>
            <div className='head' > 
              <p> Home {'>'}My Profile</p>
            </div>
            <div className="container  main_block" style={{marginTop:'5rem',marginBottom:'5rem'}}>
                <div className="img_block">
                    <img src={girl} alt=""/>
                </div>
                <div className="text_content">
                    <h4 className="girl_text">Hello, Priya</h4>
                </div>
            </div>
           
           <div className="container section" style={{height:'45rem'}}>
              <div style={{height:'25rem', width:'15rem' }}>
                <Table borderless>
                
                <tbody>
                  <tr>
                      <img src={myprofile} alt="" />
                      <td style={{margin:'0rem'}}>My Profile</td>
                  </tr>
                  <tr>
                    <img src={enrolled} alt="" />
                    <td>Enrolled course</td>
                  </tr>
                  <tr>
                      <img src={wishlist} alt="" />
                      <td>Wishlist</td>
                  </tr>
                  <tr>
                      <img src={review} alt="" />
                      <td>Review</td>
                  </tr>
                  <tr>
                      <img src={purchase} alt="" />
                      <td>purchase History</td>
                  </tr>
                  <tr>
                      <img src={settings} alt="" />
                      <td>Settings</td>
                  </tr>
                  <tr>
                    <img src={logout} alt="" />
                    <td>logout</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className='review' style={{height:'13rem', width:'65rem'}} >
                <div>
                        <div className="block1">
                            <div>Settings</div>
                        </div>
                      <div className='block2' style={{ margin:'1rem 2rem'}}>
                          <span >Profile</span>
                          <span>Reset Password</span>
                        </div>
                        <div className='camera'>
                          <img src={camera} alt="" />
                        </div>
                  </div>

                <div>

                <div className="container form_area">
            <Form>
          <Row form style={{display:'flex', margin:'2rem 0rem'}}>
            <Col md={6} className='mx-2'>
              <FormGroup md={6}>
                <Input type="text" name="text" id="exampleEmail" placeholder="First Name"  />
              </FormGroup>
              
            </Col>
            <Col md={6}>
              <FormGroup md={6}>
                <Input type="text" name="text" id="exampleEmail" placeholder="Last Name" />
              </FormGroup>
              
            </Col>
            
          </Row>

          <Row form style={{display:'flex', margin:'1rem 0rem'}}>
            <Col md={6} className='mx-2'>
              <FormGroup md={6}>
                <Input type="email" name="text" id="exampleEmail" placeholder="Email"  />
              </FormGroup>
              
            </Col>
            <Col md={3}>
                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
            </Col>
            <Col md={2} className='mx-2'>
              <Input type="select" name="select" id="exampleSelect">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
               </Input>
            </Col>
          </Row>
          
          <Row form style={{display:'flex', margin:'1rem 0rem'}}>
            <Col md={6} className='mx-2'>
                <Input
                  type="number"
                  placeholder="Contact Number"/>
            </Col>
            <Col md={6}>
            <Input type="select" name="select" id="exampleSelect">
            <option>Country</option>
            <option>Afghanistan</option>
            <option> Albania</option>
            <option> Algeria</option>
            <option> Andorra</option>
            <option> Angola</option>
            <option> Antigua and Barbuda</option>
            <option> Argentina</option>
            <option> Armenia</option>
            <option> Australia</option>
            <option> Austria</option>
            <option> Azerbaijan</option>

            <option> The Bahamas</option>
            <option> Bahrain</option>
            <option> Bangladesh</option>
            <option> Barbados</option>
            <option> Belarus</option>
           <option> Belgium</option>
            <option> Belize</option>
            <option> Benin</option>
            <option> Bhutan</option>
            <option> Bolivia</option>
            <option> Bosnia and Herzegovina</option>
            <option> Botswana</option>
            <option> Brazil</option>
            <option> Brunei</option>
            <option> Bulgaria</option>
            <option> Burkina Faso</option>
            <option> Burundi</option>

            <option> Cabo Verde</option>
            <option> Cambodia</option>
            <option> Cameroon</option>
          <option> Canada</option>
            <option> Central African Republic</option>
            <option> Chad</option>
            <option> Chile</option>
            <option> China</option>
            <option> Colombia</option>
            <option> Comoros
            <option> Congo, Democratic Rep</option>ublic of the</option>
            <option> Congo, Republic of the</option>
            <option> Costa Rica</option>
            <option> Côte d’Ivoire</option>
            <option> Croatia</option>
            <option> Cuba</option>
            <option> Cyprus</option>
            <option> Czech Republic</option>

            <option> Denmark</option>
            <option> Djibouti</option>
            <option> Dominica</option>
            <option> Dominican Republic</option>

            <option> East Timor (Timor-Leste)</option>
            <option> Ecuador</option>
            <option> Egypt</option>
            <option> El Salvador</option>
            <option> Equatorial Guinea</option>
            <option> Eritrea</option>
            <option> Estonia</option>
            <option> Eswatini</option>
            <option> Ethiopia</option>

            <option> Fiji</option>
            <option> Finland</option>
            <option> France</option>

            <option> Gabon</option>
            <option> The Gambia</option>
            <option> Georgia</option>
            <option> Germany</option>
            <option> Ghana</option>
            <option> Greece</option>
            <option> Grenada</option>
            <option> Guatemala</option>
            <option> Guinea</option>
            <option> Guinea-Bissau</option>
            <option> Guyana</option>

            <option> Haiti</option>
            <option> Honduras</option>
            <option> Hungary</option>

            <option> Iceland</option>
            <option> India</option>
            <option> Indonesia</option>
            <option> Iraq</option>
            <option> Ireland</option>
            <option> Israel</option>
            <option> Italy</option>

            <option> Jamaica</option>
            <option> Japan</option>
            <option> Jordan</option>

            <option> Kazakhstan</option>
            <option> Kenya</option>
            <option> Kiribati</option>
            <option> Korea, North</option>
            <option> Korea, South</option>
            <option> Kosovo</option>
            <option> Kuwait</option>
            <option> Kyrgyzstan</option>

            <option> Laos</option>
            <option> Latvia</option>
            <option> Lebanon</option>
            <option> Lesotho</option>
            <option> Liberia</option>
            <option> Libya</option>
            <option> Liechtenstein</option>
            <option> Lithuania</option>
            <option> Luxembourg</option>

            <option> Madagascar</option>
            <option> Malawi</option>
            <option> Malaysia</option>
            <option> Maldives</option>
            <option> Mali</option>
            <option> Malta</option>
            <option> Marshall Islands</option>
            <option> Mauritania</option>
            <option> Mauritius</option>
            <option> Mexico</option>
            <option> Micronesia, Federated States of</option>
            <option> Moldova</option>
            <option> Monaco</option>
            <option> Mongolia</option>
            <option> Montenegro</option>
            <option> Morocco</option>
            <option> Mozambique</option>
            <option> Myanmar (Burma)</option>

            <option> Namibia</option>
            <option> Nauru</option>
            <option> Nepal</option>
            <option> Netherlands</option>
            <option> New Zealand</option>
            <option> Nicaragua</option>
            <option> Niger</option>
            <option> Nigeria</option>
            <option> North Macedonia</option>
            <option> Norway</option>

            <option> Oman</option>

            <option> Pakistan</option>
            <option> Palau</option>
            <option> Panama</option>
            <option> Papua New Guinea</option>
            <option> Paraguay</option>
            <option> Peru</option>
            <option> Philippines</option>
            <option> Poland</option>
            <option> Portugal</option>

            <option> Qatar</option>

            <option> Romania</option>
            <option> Russia</option>
            <option> Rwanda</option>

            <option> Saint Kitts and Nevis</option>
            <option> Saint Lucia</option>
            <option> Saint Vincent and the Grenadines</option>
            <option> Samoa</option>
           <option> San Marino</option>
            <option> Sao Tome and Principe</option>
            <option> Saudi Arabia</option>
            <option> Senegal</option>
            <option> Serbia</option>
            <option> Seychelles</option>
            <option> Sierra Leone</option>
            <option> Singapore</option>
            <option> Slovakia</option>
            <option> Slovenia</option>
            <option> Solomon Islands</option>
            <option> Somalia</option>
            <option> Sri Lanka</option>
            <option> Sudan</option>
            <option> Sudan, South</option>
            <option> Suriname</option>
            <option> Sweden</option>
            <option> Switzerland</option>
            <option> Syria</option>

            <option> Taiwan</option>
            <option> Tajikistan</option>
            <option> Tanzania</option>
            <option> Thailand</option>
            <option> Togo</option>
            <option> Tonga</option>
            <option> Trinidad and Tobago</option>
            <option> Tunisia</option>
            <option> Turkey</option>
            <option> Turkmenistan</option>
            <option> Tuvalu</option>

            <option> Uganda</option>
            <option> Ukraine</option>
            <option> United Arab Emirates</option>
            <option> United Kingdom</option>
            <option> United States</option>
            <option> Uruguay</option>
            <option> Uzbekistan</option>

            <option> Vanuatu</option>
            <option> Vatican City</option>
            <option> Venezuela</option>
            <option> Vietnam</option>

            <option> Yemen</option>

            <option> ambia</option>
           <option> Zimbabwe</option>
        </Input>
            </Col>
                
          </Row>
          
          <Row form style={{display:'flex', margin:'1rem 0rem'}}>
          <Col md={6} className='mx-2'>
            <Input type="select" name="select" id="exampleSelect">
              <option>State</option>
              <option>1</option>
              <option> 2</option>
            </Input>
          </Col>
          <Col md={6}>
            <Input type="select" name="select" id="exampleSelect">
                  <option>city</option>
                  <option>1</option>
                  <option>2</option>
               </Input>
            </Col>
           
          </Row>
          <Row form style={{display:'flex', margin:'2rem 0rem'}}>
            <Col md={6} className='mx-2'>
              <FormGroup md={6}>
                <Input type="text" name="text" id="exampleEmail" placeholder="Address "  />
              </FormGroup>
              
            </Col>
            <Col md={6}>
              <FormGroup md={6}>
                <Input type="number" name="number" id="exampleEmail" placeholder="Pincode/Zipcode" />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className='my-2'>
              <Input type="textarea" name="text" id="exampleText" rows='8' placeholder='Write for yourself' />
          </FormGroup>

        
          <Button style={{background:'purple' , padding:'0.5rem 2rem ', margin:'1.2rem', borderRadius:'10px'}}>Save Changes </Button>
        </Form>
        </div>

                </div>
            </div>
       

           </div>
          

     
     
            
        </div>
    )
}
