import React, { Component, useEffect, useState } from "react";
import {ScrollView} from 'react-native';
import FlexBoxComponent from './Pages/FlexBoxComponent';
import FlexBox from "./Pages/FlexBoxComponent/FlexBox";
import PropsDinamis from "./Pages/PropsDinamis";
import StateDinamis from "./Pages/StateDinamis";
import Communication from "./Pages/Communication";
import BasicJavaScrip from "./Pages/ImageSvg";
import ImageSvg from "./Pages/ImageSvg";
import CallingApiVanila from "./Pages/CallingApiVanila";
import CallApiAxios from "./Pages/CallApiAxios";
import CrudLocalApi from "./Pages/CrudLocalApi";

const Main = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      SetIsShow(false);
    }, 6000);
  },[]);
  return (
    <ScrollView>
      {/*<SampleComponent />*/}
      {/*<StylingComponent />*/}
      {/*{isShow && <FlexBoxComponent />}*/}
      {/*<FlexBox/>*/}
      {/*<PropsDinamis/>*/}
      {/*<PositionReactNative />*/}
      {/*<StateDinamis/>*/}
      {/*<Communication/>*/}
      {/*<ImageSvg/>*/}
      {/*<CallingApiVanila/>*/}
      {/*<CallApiAxios/>*/}
      <CrudLocalApi/>
    </ScrollView>
  );
};

export default Main;
