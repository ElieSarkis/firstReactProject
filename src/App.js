import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import FormCards from './Components/FormCards/FormCards';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <br />
      <h1 className="mt-5 mb-5">Candidates for the Software Engineer vacancy:</h1>
      <div className="input-group">
      <div className="form-inline">
      <FormCards name="Candidate One" image="https://ucc.edu.gh/sites/default/files/default_images/img_avatar.png" candidateName="Elie Bayzler" text="Strong background in computer science"/>
      <FormCards name="Candidate Two" image="https://www.venturestream.co.uk/wp-content/uploads/2016/09/Sean.png" candidateName="John Karam" text="Computer geek"/>
      <FormCards name="Candidate Three" image="https://www.devicemedia.ca/wp-content/uploads/avatar-7.png" candidateName="Dina Sok" text="Very intelligent person"/>
      <FormCards name="Candidate Four" image="https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg" candidateName="John Henning" text="Holder of a Master's degree"/>
      <FormCards name="Candidate Five" image="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png" candidateName="Alex Sandro" text="Very experienced in software-related matters"/>
      <FormCards name="Candidate Six" image="https://www.rsmuk.com/-/media/images/staffdetailsphotos/website_avatar2.jpg?h=500&la=en&w=500&hash=1BC445E3EF1910980A54F9752D3FEB6F" candidateName="Rony Ted" text=""/>
      <FormCards name="Candidate Seven" image="https://storage.jewnetwork.com/content/users/avatars/1435/avatar_1435_500.jpg?1558623120" candidateName="Toni Simpson" text=""/>
      <FormCards name="Candidate Eight" image="https://storage.jewnetwork.com/content/users/avatars/3345/avatar_3345_500.jpg?1558627089" candidateName="Ahmad Saleh" text=""/>
      <FormCards name="Candidate Nine" image="http://kaptantravels.com/images/test1.png" candidateName="Maroun Younan" text=""/>
      <FormCards name="Candidate Ten" image="http://stevensonenglish.org/eng151-om14-licastro18/files/2018/10/avator_McNerney-300x300.png" candidateName="John Lesnar" text=""/>
      </div>
      </div>
      
    <Footer />
      
    </div>
  );
}

export default App;
