import React, {Component} from 'react'
import image1 from './Images/cover.png'
import image2 from './Images/CDimage.png'
import image3 from './Images/CLImage.png'
import './MainPage.css'

class MainPage extends Component{
    render(){
        return(
            <div className="MainPageContainer">
                <div className="Wrapper1">
                    <img className="image1Design" src={image1}></img>
                    <div className="IntroHolder">
                    <div className="intoMessageStatement">
                    <p className="introStatment">
                        
Integrity is a fundamental aspect of conducting business to the glory of God. Honesty, transparency, and fairness should permeate every decision and action taken. Upholding high moral standards not only builds trust but also reflects the character of God. A business that seeks to honor God should also prioritize the well-being of its employees and customers. This means treating employees with respect, providing fair wages, offering opportunities for growth, and creating a positive work environment. Customers should be served with excellence, offering them products or services that meet their needs and provide value.
</p><p className="introStatment">
Furthermore, a business can actively contribute to the betterment of society by engaging in ethical practices and promoting social responsibility. This may involve supporting local communities, investing in sustainable practices, or donating a portion of profits to charitable causes. Beyond the external aspects, a business to the glory of God should also prioritize the spiritual growth and character development of those involved. Encouraging employees to pursue personal and professional growth, fostering an atmosphere of prayer and encouragement, and promoting ethical decision-making rooted in biblical principles are all ways to align the business with God’s purposes.
</p><p className="introStatment">
Ultimately, running a business to the glory of God is about recognizing that all resources, opportunities, and abilities come from Him. It is about stewarding those resources well and using them to make a positive impact, while always seeking to honor God in every aspect of the business. May this perspective inspire and guide those who desire to integrate their faith with their work, so that their business becomes a shining light that brings glory to God and blesses those it serves.</p>
                
                    
                </div>
                </div>
                </div>
                <div className="Wrapper2">
                    <h1>Weekly Market Schedule</h1>
                    <p>Supporting local business and glorifying the name of christ in all things.</p>
                    <h3>Fall-Winter Events</h3>
                    <h4>September-December 3pm-7pm</h4>
                    <h4>9000 W Olive Ave, Peoria, AZ 85345</h4>
                    <h4>September 23, 2023 @ South Peoria Baptist Church</h4>
                </div>
                <div>
                <h1>Vendors</h1>
                </div>
                <div className="mainWrapper3Holder">
                <div className="Wrapper3">
                    <div className="VendorComponentHolder">
                        <div className="VendorChildComponent">
                        <h3>Vendor Sign Up</h3>
                        <p className="vendorTextDesign">Want to be apart of our brand new markets? We have an exclusive offer for you, no application fees for the entire fall schedule. Sign up today</p>
                        <div className="SubscriptionText">
                        <h1>$0</h1>
                        <h4 className="textAlighText">Application Fee through December</h4>
                        </div>
                        <button className="vendorSignUpButton">Sign Up</button>
                        </div>
                        
                    </div>
                    <div className ="OfferText">
                <p >This is our offer to you, we want to make sure that through the fall season you will consider making this market apart of business endeavors.</p>

                </div>
                
                    
                </div>
               
                </div>
               
                <div className="Wrapper4">
                    this is a test
                </div>
                <div className="Wrapper5">
                    <h1 className="asSeenOn">AS SEEN ON</h1>
                    
                        <div className="logoImagesIcons">
                    <a href="https://open.spotify.com/show/0N0UT5z0OnR8JZF6xWwOJj?si=NBbBVoPVQWmKKzT-1pfLEw">
                        <img className="cdDesign" src={image2}></img>
                    </a>
                    <h4>
                    <div>
                    <a href="https://open.spotify.com/show/1o9cEkYiY1cwBZy6okrPiK?si=MifAzq6LR_uHJ8ZEmXmPGw">
                        <img className="cdDesign" src={image3}></img>
                    </a>
                    </div>
                    </h4>
                    </div>
                    
                   

                    
                </div>

            </div>
        )
    }
}
export default MainPage;