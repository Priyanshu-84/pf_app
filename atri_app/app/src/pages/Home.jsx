import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Accordion } from "@atrilabs/react-component-manifests/src/manifests/Accordion/Accordion.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlexHomeCb, useFlexBlock1Cb, useFlexBox11Cb, useFlexBox12Cb, useFlexBlock2Cb, useFlexBox21Cb, useFlexHeadCb, useFlexBodyCb, useFlexButtonCb, useFlexBox22Cb, useFlexBlock3Cb, useFlexBox31Cb, useFlexBox32Cb, useFlexPhoto1Cb, useFlexPhoto2Cb, useFlexPhoto3Cb, useFlexPhoto4Cb, useFlexBlock4Cb, useFlexBox41Cb, useFlexBox42Cb, useServicePart1Cb, useFlexServicehead1Cb, useFlexServiceicon1Cb, useFlex27Cb, useFlex28Cb, useServicePart2Cb, useFlex40Cb, useFlex41Cb, useFlexServiceicon2Cb, useFlexServicehead2Cb, useServicePart3Cb, useFlex45Cb, useFlex46Cb, useFlexServiceicon3Cb, useFlexServicehead3Cb, useFlexBlock5Cb, useFlexBox52Cb, useFlexGalleryCb, useFlex60Cb, useFlex61Cb, useFlex62Cb, useFlex65Cb, useFlex63Cb, useFlex64Cb, useFlex68Cb, useFlex66Cb, useFlex67Cb, useFlex71Cb, useFlex69Cb, useFlex70Cb, useFlex74Cb, useFlex72Cb, useFlex73Cb, useNavButtonCb, useFlexBox51Cb, useFlexviewallprojectsCb, useFlex54Cb, useFlexHead5Cb, useFlexDescription5Cb, useFlexBlock6Cb, useFlex108Cb, useFlex111Cb, useFlex109Cb, useFlex112Cb, useFlex117Cb, useFlex118Cb, useFlex119Cb, useFlex120Cb, useFlexBlock7Cb, useFlexBox71Cb, useFlex131Cb, useFlex132Cb, useFlexBox72Cb, useFlex133Cb, useFlex130Cb, useFlexBlock8Cb, useFlexBox81Cb, useFlexEducationCb, useFlexEducationbodyCb, useEducationbody1Cb, useEducationbody11Cb, useEducationbody12Cb, useEducationbody2Cb, useFlex155Cb, useFlex156Cb, useEducationbody3Cb, useFlex158Cb, useFlex159Cb, useFlexBox82Cb, useFlex171Cb, useFlex187Cb, useFlex186Cb, useFlex190Cb, useFlex188Cb, useFlex189Cb, useFlex194Cb, useFlex193Cb, useFlex191Cb, useFlex192Cb, useFlex198Cb, useFlex197Cb, useFlex195Cb, useFlex196Cb, useFlexBlock9Cb, useFlex200Cb, useFlex201Cb, useFlexBlock10Cb, useFlexBox101Cb, useFlexBox102Cb, useFlex206Cb, useFlex207Cb, useFlexBlock11Cb, useFlex212Cb, useFlex210Cb, useFlex222Cb, useFlex219Cb, useFlex220Cb, useFlex221Cb, useFlex226Cb, useFlex223Cb, useFlex224Cb, useFlex225Cb, useFlex230Cb, useFlex227Cb, useFlex228Cb, useFlex229Cb, useFlex211Cb, useFlex231Cb, useFlex213Cb, useFlex232Cb, usePortfolioCreatorCb, useAboutCb, useServicesCb, useProductsCb, useBlogCb, useBook_a_CallCb, useHeading2Cb, useHeading1Cb, useDescriptionCb, useBookButtonCb, useDownload_CVCb, usePhotoCb, useTrusted_byCb, useLogoipsum1Cb, useLogoipsum2Cb, useLogoipsum3Cb, useLogoipsum4Cb, useServiceHeaderCb, useServiceDescriptionCb, useServicehead1Cb, useServiceicon11Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, useTextBox14Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useTextBox22Cb, useServiceicon2Cb, useServicehead2Cb, useTextBox24Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useServiceicon3Cb, useServicehead3Cb, useTextBox32Cb, useTextBox34Cb, useTextBox35Cb, useImage15Cb, useImage16Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useImage17Cb, useTextBox39Cb, useTextBox40Cb, useTextBox41Cb, useImage18Cb, useTextBox42Cb, useTextBox43Cb, useTextBox44Cb, useImage19Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, usePrevCb, useNextCb, useView_all_projectsCb, useHead5Cb, useDescription5Cb, useTextBox84Cb, useTextBox87Cb, useTextBox88Cb, useTextBox89Cb, useTextBox90Cb, useTextBox91Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useTextBox110Cb, useTextBox111Cb, useTextBox112Cb, useTextBox113Cb, useTextBox114Cb, useTextBox115Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useImage35Cb, useImage36Cb, useImage33Cb, useImage34Cb, useBookCb, useEducationCb, useTextBox123Cb, useTextBox124Cb, useUprightarrowCb, useTextBox126Cb, useTextBox127Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb, useTextBox131Cb, useTextBox132Cb, useTextBox133Cb, useTextBox134Cb, useTextBox147Cb, useImage38Cb, useImage39Cb, useTextBox160Cb, useTextBox161Cb, useTextBox162Cb, useTextBox163Cb, useImage40Cb, useTextBox164Cb, useTextBox165Cb, useTextBox166Cb, useTextBox167Cb, useImage41Cb, useTextBox168Cb, useTextBox169Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useTextBox173Cb, useCarousel3Cb, useTextBox174Cb, useTextBox175Cb, useAccordion1Cb, useAccordion2Cb, useAccordion3Cb, useAccordion4Cb, useAccordion5Cb, useAccordion6Cb, useAccordion7Cb, useAccordion8Cb, useLink4Cb, useLink1Cb, useLink6Cb, useLink7Cb, useLink2Cb, useLink5Cb, useLink9Cb, useLink3Cb, useLink8Cb, useTextBox178Cb, useTextBox179Cb, useLink10Cb, useImage42Cb, useTextBox176Cb, useTextBox177Cb, useTextBox180Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const FlexHomeProps = useStore((state)=>state["Home"]["FlexHome"]);
const FlexHomeIoProps = useIoStore((state)=>state["Home"]["FlexHome"]);
const FlexHomeCb = useFlexHomeCb()
const FlexBlock1Props = useStore((state)=>state["Home"]["FlexBlock1"]);
const FlexBlock1IoProps = useIoStore((state)=>state["Home"]["FlexBlock1"]);
const FlexBlock1Cb = useFlexBlock1Cb()
const FlexBox11Props = useStore((state)=>state["Home"]["FlexBox11"]);
const FlexBox11IoProps = useIoStore((state)=>state["Home"]["FlexBox11"]);
const FlexBox11Cb = useFlexBox11Cb()
const FlexBox12Props = useStore((state)=>state["Home"]["FlexBox12"]);
const FlexBox12IoProps = useIoStore((state)=>state["Home"]["FlexBox12"]);
const FlexBox12Cb = useFlexBox12Cb()
const FlexBlock2Props = useStore((state)=>state["Home"]["FlexBlock2"]);
const FlexBlock2IoProps = useIoStore((state)=>state["Home"]["FlexBlock2"]);
const FlexBlock2Cb = useFlexBlock2Cb()
const FlexBox21Props = useStore((state)=>state["Home"]["FlexBox21"]);
const FlexBox21IoProps = useIoStore((state)=>state["Home"]["FlexBox21"]);
const FlexBox21Cb = useFlexBox21Cb()
const FlexHeadProps = useStore((state)=>state["Home"]["FlexHead"]);
const FlexHeadIoProps = useIoStore((state)=>state["Home"]["FlexHead"]);
const FlexHeadCb = useFlexHeadCb()
const FlexBodyProps = useStore((state)=>state["Home"]["FlexBody"]);
const FlexBodyIoProps = useIoStore((state)=>state["Home"]["FlexBody"]);
const FlexBodyCb = useFlexBodyCb()
const FlexButtonProps = useStore((state)=>state["Home"]["FlexButton"]);
const FlexButtonIoProps = useIoStore((state)=>state["Home"]["FlexButton"]);
const FlexButtonCb = useFlexButtonCb()
const FlexBox22Props = useStore((state)=>state["Home"]["FlexBox22"]);
const FlexBox22IoProps = useIoStore((state)=>state["Home"]["FlexBox22"]);
const FlexBox22Cb = useFlexBox22Cb()
const FlexBlock3Props = useStore((state)=>state["Home"]["FlexBlock3"]);
const FlexBlock3IoProps = useIoStore((state)=>state["Home"]["FlexBlock3"]);
const FlexBlock3Cb = useFlexBlock3Cb()
const FlexBox31Props = useStore((state)=>state["Home"]["FlexBox31"]);
const FlexBox31IoProps = useIoStore((state)=>state["Home"]["FlexBox31"]);
const FlexBox31Cb = useFlexBox31Cb()
const FlexBox32Props = useStore((state)=>state["Home"]["FlexBox32"]);
const FlexBox32IoProps = useIoStore((state)=>state["Home"]["FlexBox32"]);
const FlexBox32Cb = useFlexBox32Cb()
const FlexPhoto1Props = useStore((state)=>state["Home"]["FlexPhoto1"]);
const FlexPhoto1IoProps = useIoStore((state)=>state["Home"]["FlexPhoto1"]);
const FlexPhoto1Cb = useFlexPhoto1Cb()
const FlexPhoto2Props = useStore((state)=>state["Home"]["FlexPhoto2"]);
const FlexPhoto2IoProps = useIoStore((state)=>state["Home"]["FlexPhoto2"]);
const FlexPhoto2Cb = useFlexPhoto2Cb()
const FlexPhoto3Props = useStore((state)=>state["Home"]["FlexPhoto3"]);
const FlexPhoto3IoProps = useIoStore((state)=>state["Home"]["FlexPhoto3"]);
const FlexPhoto3Cb = useFlexPhoto3Cb()
const FlexPhoto4Props = useStore((state)=>state["Home"]["FlexPhoto4"]);
const FlexPhoto4IoProps = useIoStore((state)=>state["Home"]["FlexPhoto4"]);
const FlexPhoto4Cb = useFlexPhoto4Cb()
const FlexBlock4Props = useStore((state)=>state["Home"]["FlexBlock4"]);
const FlexBlock4IoProps = useIoStore((state)=>state["Home"]["FlexBlock4"]);
const FlexBlock4Cb = useFlexBlock4Cb()
const FlexBox41Props = useStore((state)=>state["Home"]["FlexBox41"]);
const FlexBox41IoProps = useIoStore((state)=>state["Home"]["FlexBox41"]);
const FlexBox41Cb = useFlexBox41Cb()
const FlexBox42Props = useStore((state)=>state["Home"]["FlexBox42"]);
const FlexBox42IoProps = useIoStore((state)=>state["Home"]["FlexBox42"]);
const FlexBox42Cb = useFlexBox42Cb()
const ServicePart1Props = useStore((state)=>state["Home"]["ServicePart1"]);
const ServicePart1IoProps = useIoStore((state)=>state["Home"]["ServicePart1"]);
const ServicePart1Cb = useServicePart1Cb()
const FlexServicehead1Props = useStore((state)=>state["Home"]["FlexServicehead1"]);
const FlexServicehead1IoProps = useIoStore((state)=>state["Home"]["FlexServicehead1"]);
const FlexServicehead1Cb = useFlexServicehead1Cb()
const FlexServiceicon1Props = useStore((state)=>state["Home"]["FlexServiceicon1"]);
const FlexServiceicon1IoProps = useIoStore((state)=>state["Home"]["FlexServiceicon1"]);
const FlexServiceicon1Cb = useFlexServiceicon1Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const ServicePart2Props = useStore((state)=>state["Home"]["ServicePart2"]);
const ServicePart2IoProps = useIoStore((state)=>state["Home"]["ServicePart2"]);
const ServicePart2Cb = useServicePart2Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const FlexServiceicon2Props = useStore((state)=>state["Home"]["FlexServiceicon2"]);
const FlexServiceicon2IoProps = useIoStore((state)=>state["Home"]["FlexServiceicon2"]);
const FlexServiceicon2Cb = useFlexServiceicon2Cb()
const FlexServicehead2Props = useStore((state)=>state["Home"]["FlexServicehead2"]);
const FlexServicehead2IoProps = useIoStore((state)=>state["Home"]["FlexServicehead2"]);
const FlexServicehead2Cb = useFlexServicehead2Cb()
const ServicePart3Props = useStore((state)=>state["Home"]["ServicePart3"]);
const ServicePart3IoProps = useIoStore((state)=>state["Home"]["ServicePart3"]);
const ServicePart3Cb = useServicePart3Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const FlexServiceicon3Props = useStore((state)=>state["Home"]["FlexServiceicon3"]);
const FlexServiceicon3IoProps = useIoStore((state)=>state["Home"]["FlexServiceicon3"]);
const FlexServiceicon3Cb = useFlexServiceicon3Cb()
const FlexServicehead3Props = useStore((state)=>state["Home"]["FlexServicehead3"]);
const FlexServicehead3IoProps = useIoStore((state)=>state["Home"]["FlexServicehead3"]);
const FlexServicehead3Cb = useFlexServicehead3Cb()
const FlexBlock5Props = useStore((state)=>state["Home"]["FlexBlock5"]);
const FlexBlock5IoProps = useIoStore((state)=>state["Home"]["FlexBlock5"]);
const FlexBlock5Cb = useFlexBlock5Cb()
const FlexBox52Props = useStore((state)=>state["Home"]["FlexBox52"]);
const FlexBox52IoProps = useIoStore((state)=>state["Home"]["FlexBox52"]);
const FlexBox52Cb = useFlexBox52Cb()
const FlexGalleryProps = useStore((state)=>state["Home"]["FlexGallery"]);
const FlexGalleryIoProps = useIoStore((state)=>state["Home"]["FlexGallery"]);
const FlexGalleryCb = useFlexGalleryCb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const NavButtonProps = useStore((state)=>state["Home"]["NavButton"]);
const NavButtonIoProps = useIoStore((state)=>state["Home"]["NavButton"]);
const NavButtonCb = useNavButtonCb()
const FlexBox51Props = useStore((state)=>state["Home"]["FlexBox51"]);
const FlexBox51IoProps = useIoStore((state)=>state["Home"]["FlexBox51"]);
const FlexBox51Cb = useFlexBox51Cb()
const FlexviewallprojectsProps = useStore((state)=>state["Home"]["Flexviewallprojects"]);
const FlexviewallprojectsIoProps = useIoStore((state)=>state["Home"]["Flexviewallprojects"]);
const FlexviewallprojectsCb = useFlexviewallprojectsCb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const FlexHead5Props = useStore((state)=>state["Home"]["FlexHead5"]);
const FlexHead5IoProps = useIoStore((state)=>state["Home"]["FlexHead5"]);
const FlexHead5Cb = useFlexHead5Cb()
const FlexDescription5Props = useStore((state)=>state["Home"]["FlexDescription5"]);
const FlexDescription5IoProps = useIoStore((state)=>state["Home"]["FlexDescription5"]);
const FlexDescription5Cb = useFlexDescription5Cb()
const FlexBlock6Props = useStore((state)=>state["Home"]["FlexBlock6"]);
const FlexBlock6IoProps = useIoStore((state)=>state["Home"]["FlexBlock6"]);
const FlexBlock6Cb = useFlexBlock6Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const FlexBlock7Props = useStore((state)=>state["Home"]["FlexBlock7"]);
const FlexBlock7IoProps = useIoStore((state)=>state["Home"]["FlexBlock7"]);
const FlexBlock7Cb = useFlexBlock7Cb()
const FlexBox71Props = useStore((state)=>state["Home"]["FlexBox71"]);
const FlexBox71IoProps = useIoStore((state)=>state["Home"]["FlexBox71"]);
const FlexBox71Cb = useFlexBox71Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const FlexBox72Props = useStore((state)=>state["Home"]["FlexBox72"]);
const FlexBox72IoProps = useIoStore((state)=>state["Home"]["FlexBox72"]);
const FlexBox72Cb = useFlexBox72Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const FlexBlock8Props = useStore((state)=>state["Home"]["FlexBlock8"]);
const FlexBlock8IoProps = useIoStore((state)=>state["Home"]["FlexBlock8"]);
const FlexBlock8Cb = useFlexBlock8Cb()
const FlexBox81Props = useStore((state)=>state["Home"]["FlexBox81"]);
const FlexBox81IoProps = useIoStore((state)=>state["Home"]["FlexBox81"]);
const FlexBox81Cb = useFlexBox81Cb()
const FlexEducationProps = useStore((state)=>state["Home"]["FlexEducation"]);
const FlexEducationIoProps = useIoStore((state)=>state["Home"]["FlexEducation"]);
const FlexEducationCb = useFlexEducationCb()
const FlexEducationbodyProps = useStore((state)=>state["Home"]["FlexEducationbody"]);
const FlexEducationbodyIoProps = useIoStore((state)=>state["Home"]["FlexEducationbody"]);
const FlexEducationbodyCb = useFlexEducationbodyCb()
const Educationbody1Props = useStore((state)=>state["Home"]["Educationbody1"]);
const Educationbody1IoProps = useIoStore((state)=>state["Home"]["Educationbody1"]);
const Educationbody1Cb = useEducationbody1Cb()
const Educationbody11Props = useStore((state)=>state["Home"]["Educationbody11"]);
const Educationbody11IoProps = useIoStore((state)=>state["Home"]["Educationbody11"]);
const Educationbody11Cb = useEducationbody11Cb()
const Educationbody12Props = useStore((state)=>state["Home"]["Educationbody12"]);
const Educationbody12IoProps = useIoStore((state)=>state["Home"]["Educationbody12"]);
const Educationbody12Cb = useEducationbody12Cb()
const Educationbody2Props = useStore((state)=>state["Home"]["Educationbody2"]);
const Educationbody2IoProps = useIoStore((state)=>state["Home"]["Educationbody2"]);
const Educationbody2Cb = useEducationbody2Cb()
const Flex155Props = useStore((state)=>state["Home"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["Home"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex156Props = useStore((state)=>state["Home"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["Home"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Educationbody3Props = useStore((state)=>state["Home"]["Educationbody3"]);
const Educationbody3IoProps = useIoStore((state)=>state["Home"]["Educationbody3"]);
const Educationbody3Cb = useEducationbody3Cb()
const Flex158Props = useStore((state)=>state["Home"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["Home"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex159Props = useStore((state)=>state["Home"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["Home"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const FlexBox82Props = useStore((state)=>state["Home"]["FlexBox82"]);
const FlexBox82IoProps = useIoStore((state)=>state["Home"]["FlexBox82"]);
const FlexBox82Cb = useFlexBox82Cb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex187Props = useStore((state)=>state["Home"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["Home"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex186Props = useStore((state)=>state["Home"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["Home"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const Flex190Props = useStore((state)=>state["Home"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["Home"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex188Props = useStore((state)=>state["Home"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["Home"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex189Props = useStore((state)=>state["Home"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["Home"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex194Props = useStore((state)=>state["Home"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["Home"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex193Props = useStore((state)=>state["Home"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["Home"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex191Props = useStore((state)=>state["Home"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["Home"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex192Props = useStore((state)=>state["Home"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["Home"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const Flex198Props = useStore((state)=>state["Home"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["Home"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const Flex197Props = useStore((state)=>state["Home"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["Home"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Flex195Props = useStore((state)=>state["Home"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["Home"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex196Props = useStore((state)=>state["Home"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["Home"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const FlexBlock9Props = useStore((state)=>state["Home"]["FlexBlock9"]);
const FlexBlock9IoProps = useIoStore((state)=>state["Home"]["FlexBlock9"]);
const FlexBlock9Cb = useFlexBlock9Cb()
const Flex200Props = useStore((state)=>state["Home"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["Home"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex201Props = useStore((state)=>state["Home"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["Home"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const FlexBlock10Props = useStore((state)=>state["Home"]["FlexBlock10"]);
const FlexBlock10IoProps = useIoStore((state)=>state["Home"]["FlexBlock10"]);
const FlexBlock10Cb = useFlexBlock10Cb()
const FlexBox101Props = useStore((state)=>state["Home"]["FlexBox101"]);
const FlexBox101IoProps = useIoStore((state)=>state["Home"]["FlexBox101"]);
const FlexBox101Cb = useFlexBox101Cb()
const FlexBox102Props = useStore((state)=>state["Home"]["FlexBox102"]);
const FlexBox102IoProps = useIoStore((state)=>state["Home"]["FlexBox102"]);
const FlexBox102Cb = useFlexBox102Cb()
const Flex206Props = useStore((state)=>state["Home"]["Flex206"]);
const Flex206IoProps = useIoStore((state)=>state["Home"]["Flex206"]);
const Flex206Cb = useFlex206Cb()
const Flex207Props = useStore((state)=>state["Home"]["Flex207"]);
const Flex207IoProps = useIoStore((state)=>state["Home"]["Flex207"]);
const Flex207Cb = useFlex207Cb()
const FlexBlock11Props = useStore((state)=>state["Home"]["FlexBlock11"]);
const FlexBlock11IoProps = useIoStore((state)=>state["Home"]["FlexBlock11"]);
const FlexBlock11Cb = useFlexBlock11Cb()
const Flex212Props = useStore((state)=>state["Home"]["Flex212"]);
const Flex212IoProps = useIoStore((state)=>state["Home"]["Flex212"]);
const Flex212Cb = useFlex212Cb()
const Flex210Props = useStore((state)=>state["Home"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["Home"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const Flex222Props = useStore((state)=>state["Home"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["Home"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Flex219Props = useStore((state)=>state["Home"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["Home"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex220Props = useStore((state)=>state["Home"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["Home"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const Flex221Props = useStore((state)=>state["Home"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["Home"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const Flex226Props = useStore((state)=>state["Home"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["Home"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Flex223Props = useStore((state)=>state["Home"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["Home"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex224Props = useStore((state)=>state["Home"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["Home"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex225Props = useStore((state)=>state["Home"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["Home"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Flex230Props = useStore((state)=>state["Home"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["Home"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const Flex227Props = useStore((state)=>state["Home"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["Home"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Flex228Props = useStore((state)=>state["Home"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["Home"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Flex229Props = useStore((state)=>state["Home"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["Home"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex211Props = useStore((state)=>state["Home"]["Flex211"]);
const Flex211IoProps = useIoStore((state)=>state["Home"]["Flex211"]);
const Flex211Cb = useFlex211Cb()
const Flex231Props = useStore((state)=>state["Home"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["Home"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex213Props = useStore((state)=>state["Home"]["Flex213"]);
const Flex213IoProps = useIoStore((state)=>state["Home"]["Flex213"]);
const Flex213Cb = useFlex213Cb()
const Flex232Props = useStore((state)=>state["Home"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["Home"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const PortfolioCreatorProps = useStore((state)=>state["Home"]["PortfolioCreator"]);
const PortfolioCreatorIoProps = useIoStore((state)=>state["Home"]["PortfolioCreator"]);
const PortfolioCreatorCb = usePortfolioCreatorCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const ProductsProps = useStore((state)=>state["Home"]["Products"]);
const ProductsIoProps = useIoStore((state)=>state["Home"]["Products"]);
const ProductsCb = useProductsCb()
const BlogProps = useStore((state)=>state["Home"]["Blog"]);
const BlogIoProps = useIoStore((state)=>state["Home"]["Blog"]);
const BlogCb = useBlogCb()
const Book_a_CallProps = useStore((state)=>state["Home"]["Book_a_Call"]);
const Book_a_CallIoProps = useIoStore((state)=>state["Home"]["Book_a_Call"]);
const Book_a_CallCb = useBook_a_CallCb()
const Heading2Props = useStore((state)=>state["Home"]["Heading2"]);
const Heading2IoProps = useIoStore((state)=>state["Home"]["Heading2"]);
const Heading2Cb = useHeading2Cb()
const Heading1Props = useStore((state)=>state["Home"]["Heading1"]);
const Heading1IoProps = useIoStore((state)=>state["Home"]["Heading1"]);
const Heading1Cb = useHeading1Cb()
const DescriptionProps = useStore((state)=>state["Home"]["Description"]);
const DescriptionIoProps = useIoStore((state)=>state["Home"]["Description"]);
const DescriptionCb = useDescriptionCb()
const BookButtonProps = useStore((state)=>state["Home"]["BookButton"]);
const BookButtonIoProps = useIoStore((state)=>state["Home"]["BookButton"]);
const BookButtonCb = useBookButtonCb()
const Download_CVProps = useStore((state)=>state["Home"]["Download_CV"]);
const Download_CVIoProps = useIoStore((state)=>state["Home"]["Download_CV"]);
const Download_CVCb = useDownload_CVCb()
const PhotoProps = useStore((state)=>state["Home"]["Photo"]);
const PhotoIoProps = useIoStore((state)=>state["Home"]["Photo"]);
const PhotoCb = usePhotoCb()
const Trusted_byProps = useStore((state)=>state["Home"]["Trusted_by"]);
const Trusted_byIoProps = useIoStore((state)=>state["Home"]["Trusted_by"]);
const Trusted_byCb = useTrusted_byCb()
const Logoipsum1Props = useStore((state)=>state["Home"]["Logoipsum1"]);
const Logoipsum1IoProps = useIoStore((state)=>state["Home"]["Logoipsum1"]);
const Logoipsum1Cb = useLogoipsum1Cb()
const Logoipsum2Props = useStore((state)=>state["Home"]["Logoipsum2"]);
const Logoipsum2IoProps = useIoStore((state)=>state["Home"]["Logoipsum2"]);
const Logoipsum2Cb = useLogoipsum2Cb()
const Logoipsum3Props = useStore((state)=>state["Home"]["Logoipsum3"]);
const Logoipsum3IoProps = useIoStore((state)=>state["Home"]["Logoipsum3"]);
const Logoipsum3Cb = useLogoipsum3Cb()
const Logoipsum4Props = useStore((state)=>state["Home"]["Logoipsum4"]);
const Logoipsum4IoProps = useIoStore((state)=>state["Home"]["Logoipsum4"]);
const Logoipsum4Cb = useLogoipsum4Cb()
const ServiceHeaderProps = useStore((state)=>state["Home"]["ServiceHeader"]);
const ServiceHeaderIoProps = useIoStore((state)=>state["Home"]["ServiceHeader"]);
const ServiceHeaderCb = useServiceHeaderCb()
const ServiceDescriptionProps = useStore((state)=>state["Home"]["ServiceDescription"]);
const ServiceDescriptionIoProps = useIoStore((state)=>state["Home"]["ServiceDescription"]);
const ServiceDescriptionCb = useServiceDescriptionCb()
const Servicehead1Props = useStore((state)=>state["Home"]["Servicehead1"]);
const Servicehead1IoProps = useIoStore((state)=>state["Home"]["Servicehead1"]);
const Servicehead1Cb = useServicehead1Cb()
const Serviceicon11Props = useStore((state)=>state["Home"]["Serviceicon11"]);
const Serviceicon11IoProps = useIoStore((state)=>state["Home"]["Serviceicon11"]);
const Serviceicon11Cb = useServiceicon11Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Serviceicon2Props = useStore((state)=>state["Home"]["Serviceicon2"]);
const Serviceicon2IoProps = useIoStore((state)=>state["Home"]["Serviceicon2"]);
const Serviceicon2Cb = useServiceicon2Cb()
const Servicehead2Props = useStore((state)=>state["Home"]["Servicehead2"]);
const Servicehead2IoProps = useIoStore((state)=>state["Home"]["Servicehead2"]);
const Servicehead2Cb = useServicehead2Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Serviceicon3Props = useStore((state)=>state["Home"]["Serviceicon3"]);
const Serviceicon3IoProps = useIoStore((state)=>state["Home"]["Serviceicon3"]);
const Serviceicon3Cb = useServiceicon3Cb()
const Servicehead3Props = useStore((state)=>state["Home"]["Servicehead3"]);
const Servicehead3IoProps = useIoStore((state)=>state["Home"]["Servicehead3"]);
const Servicehead3Cb = useServicehead3Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const PrevProps = useStore((state)=>state["Home"]["Prev"]);
const PrevIoProps = useIoStore((state)=>state["Home"]["Prev"]);
const PrevCb = usePrevCb()
const NextProps = useStore((state)=>state["Home"]["Next"]);
const NextIoProps = useIoStore((state)=>state["Home"]["Next"]);
const NextCb = useNextCb()
const View_all_projectsProps = useStore((state)=>state["Home"]["View_all_projects"]);
const View_all_projectsIoProps = useIoStore((state)=>state["Home"]["View_all_projects"]);
const View_all_projectsCb = useView_all_projectsCb()
const Head5Props = useStore((state)=>state["Home"]["Head5"]);
const Head5IoProps = useIoStore((state)=>state["Home"]["Head5"]);
const Head5Cb = useHead5Cb()
const Description5Props = useStore((state)=>state["Home"]["Description5"]);
const Description5IoProps = useIoStore((state)=>state["Home"]["Description5"]);
const Description5Cb = useDescription5Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const BookProps = useStore((state)=>state["Home"]["Book"]);
const BookIoProps = useIoStore((state)=>state["Home"]["Book"]);
const BookCb = useBookCb()
const EducationProps = useStore((state)=>state["Home"]["Education"]);
const EducationIoProps = useIoStore((state)=>state["Home"]["Education"]);
const EducationCb = useEducationCb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const UprightarrowProps = useStore((state)=>state["Home"]["Uprightarrow"]);
const UprightarrowIoProps = useIoStore((state)=>state["Home"]["Uprightarrow"]);
const UprightarrowCb = useUprightarrowCb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox160Props = useStore((state)=>state["Home"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Home"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox164Props = useStore((state)=>state["Home"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Home"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox165Props = useStore((state)=>state["Home"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Home"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox166Props = useStore((state)=>state["Home"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Carousel3Props = useStore((state)=>state["Home"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["Home"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const Accordion1Props = useStore((state)=>state["Home"]["Accordion1"]);
const Accordion1IoProps = useIoStore((state)=>state["Home"]["Accordion1"]);
const Accordion1Cb = useAccordion1Cb()
const Accordion2Props = useStore((state)=>state["Home"]["Accordion2"]);
const Accordion2IoProps = useIoStore((state)=>state["Home"]["Accordion2"]);
const Accordion2Cb = useAccordion2Cb()
const Accordion3Props = useStore((state)=>state["Home"]["Accordion3"]);
const Accordion3IoProps = useIoStore((state)=>state["Home"]["Accordion3"]);
const Accordion3Cb = useAccordion3Cb()
const Accordion4Props = useStore((state)=>state["Home"]["Accordion4"]);
const Accordion4IoProps = useIoStore((state)=>state["Home"]["Accordion4"]);
const Accordion4Cb = useAccordion4Cb()
const Accordion5Props = useStore((state)=>state["Home"]["Accordion5"]);
const Accordion5IoProps = useIoStore((state)=>state["Home"]["Accordion5"]);
const Accordion5Cb = useAccordion5Cb()
const Accordion6Props = useStore((state)=>state["Home"]["Accordion6"]);
const Accordion6IoProps = useIoStore((state)=>state["Home"]["Accordion6"]);
const Accordion6Cb = useAccordion6Cb()
const Accordion7Props = useStore((state)=>state["Home"]["Accordion7"]);
const Accordion7IoProps = useIoStore((state)=>state["Home"]["Accordion7"]);
const Accordion7Cb = useAccordion7Cb()
const Accordion8Props = useStore((state)=>state["Home"]["Accordion8"]);
const Accordion8IoProps = useIoStore((state)=>state["Home"]["Accordion8"]);
const Accordion8Cb = useAccordion8Cb()
const Link4Props = useStore((state)=>state["Home"]["Link4"]);
const Link4IoProps = useIoStore((state)=>state["Home"]["Link4"]);
const Link4Cb = useLink4Cb()
const Link1Props = useStore((state)=>state["Home"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["Home"]["Link1"]);
const Link1Cb = useLink1Cb()
const Link6Props = useStore((state)=>state["Home"]["Link6"]);
const Link6IoProps = useIoStore((state)=>state["Home"]["Link6"]);
const Link6Cb = useLink6Cb()
const Link7Props = useStore((state)=>state["Home"]["Link7"]);
const Link7IoProps = useIoStore((state)=>state["Home"]["Link7"]);
const Link7Cb = useLink7Cb()
const Link2Props = useStore((state)=>state["Home"]["Link2"]);
const Link2IoProps = useIoStore((state)=>state["Home"]["Link2"]);
const Link2Cb = useLink2Cb()
const Link5Props = useStore((state)=>state["Home"]["Link5"]);
const Link5IoProps = useIoStore((state)=>state["Home"]["Link5"]);
const Link5Cb = useLink5Cb()
const Link9Props = useStore((state)=>state["Home"]["Link9"]);
const Link9IoProps = useIoStore((state)=>state["Home"]["Link9"]);
const Link9Cb = useLink9Cb()
const Link3Props = useStore((state)=>state["Home"]["Link3"]);
const Link3IoProps = useIoStore((state)=>state["Home"]["Link3"]);
const Link3Cb = useLink3Cb()
const Link8Props = useStore((state)=>state["Home"]["Link8"]);
const Link8IoProps = useIoStore((state)=>state["Home"]["Link8"]);
const Link8Cb = useLink8Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const Link10Props = useStore((state)=>state["Home"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["Home"]["Link10"]);
const Link10Cb = useLink10Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()

  return (<>
  <Flex className="p-Home FlexHome bpt" {...FlexHomeProps} {...FlexHomeCb} {...FlexHomeIoProps}>
<Flex className="p-Home FlexBlock1 bpt" {...FlexBlock1Props} {...FlexBlock1Cb} {...FlexBlock1IoProps}>
<Flex className="p-Home FlexBox11 bpt" {...FlexBox11Props} {...FlexBox11Cb} {...FlexBox11IoProps}>
<TextBox className="p-Home PortfolioCreator bpt" {...PortfolioCreatorProps} {...PortfolioCreatorCb} {...PortfolioCreatorIoProps}/>
</Flex>
<Flex className="p-Home FlexBox12 bpt" {...FlexBox12Props} {...FlexBox12Cb} {...FlexBox12IoProps}>
<TextBox className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<TextBox className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}/>
<TextBox className="p-Home Products bpt" {...ProductsProps} {...ProductsCb} {...ProductsIoProps}/>
<TextBox className="p-Home Blog bpt" {...BlogProps} {...BlogCb} {...BlogIoProps}/>
<TextBox className="p-Home Book_a_Call bpt" {...Book_a_CallProps} {...Book_a_CallCb} {...Book_a_CallIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock2 bpt" {...FlexBlock2Props} {...FlexBlock2Cb} {...FlexBlock2IoProps}>
<Flex className="p-Home FlexBox21 bpt" {...FlexBox21Props} {...FlexBox21Cb} {...FlexBox21IoProps}>
<Flex className="p-Home FlexHead bpt" {...FlexHeadProps} {...FlexHeadCb} {...FlexHeadIoProps}>
<TextBox className="p-Home Heading1 bpt" {...Heading1Props} {...Heading1Cb} {...Heading1IoProps}/>
<TextBox className="p-Home Heading2 bpt" {...Heading2Props} {...Heading2Cb} {...Heading2IoProps}/>
</Flex>
<Flex className="p-Home FlexBody bpt" {...FlexBodyProps} {...FlexBodyCb} {...FlexBodyIoProps}>
<TextBox className="p-Home Description bpt" {...DescriptionProps} {...DescriptionCb} {...DescriptionIoProps}/>
</Flex>
<Flex className="p-Home FlexButton bpt" {...FlexButtonProps} {...FlexButtonCb} {...FlexButtonIoProps}>
<Button className="p-Home BookButton bpt" {...BookButtonProps} {...BookButtonCb} {...BookButtonIoProps}/>
<TextBox className="p-Home Download_CV bpt" {...Download_CVProps} {...Download_CVCb} {...Download_CVIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FlexBox22 bpt" {...FlexBox22Props} {...FlexBox22Cb} {...FlexBox22IoProps}>
<Image className="p-Home Photo bpt" {...PhotoProps} {...PhotoCb} {...PhotoIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock3 bpt" {...FlexBlock3Props} {...FlexBlock3Cb} {...FlexBlock3IoProps}>
<Flex className="p-Home FlexBox31 bpt" {...FlexBox31Props} {...FlexBox31Cb} {...FlexBox31IoProps}>
<TextBox className="p-Home Trusted_by bpt" {...Trusted_byProps} {...Trusted_byCb} {...Trusted_byIoProps}/>
</Flex>
<Flex className="p-Home FlexBox32 bpt" {...FlexBox32Props} {...FlexBox32Cb} {...FlexBox32IoProps}>
<Flex className="p-Home FlexPhoto1 bpt" {...FlexPhoto1Props} {...FlexPhoto1Cb} {...FlexPhoto1IoProps}>
<Image className="p-Home Logoipsum1 bpt" {...Logoipsum1Props} {...Logoipsum1Cb} {...Logoipsum1IoProps}/>
</Flex>
<Flex className="p-Home FlexPhoto2 bpt" {...FlexPhoto2Props} {...FlexPhoto2Cb} {...FlexPhoto2IoProps}>
<Image className="p-Home Logoipsum2 bpt" {...Logoipsum2Props} {...Logoipsum2Cb} {...Logoipsum2IoProps}/>
</Flex>
<Flex className="p-Home FlexPhoto3 bpt" {...FlexPhoto3Props} {...FlexPhoto3Cb} {...FlexPhoto3IoProps}>
<Image className="p-Home Logoipsum3 bpt" {...Logoipsum3Props} {...Logoipsum3Cb} {...Logoipsum3IoProps}/>
</Flex>
<Flex className="p-Home FlexPhoto4 bpt" {...FlexPhoto4Props} {...FlexPhoto4Cb} {...FlexPhoto4IoProps}>
<Image className="p-Home Logoipsum4 bpt" {...Logoipsum4Props} {...Logoipsum4Cb} {...Logoipsum4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock4 bpt" {...FlexBlock4Props} {...FlexBlock4Cb} {...FlexBlock4IoProps}>
<Flex className="p-Home FlexBox41 bpt" {...FlexBox41Props} {...FlexBox41Cb} {...FlexBox41IoProps}>
<TextBox className="p-Home ServiceHeader bpt" {...ServiceHeaderProps} {...ServiceHeaderCb} {...ServiceHeaderIoProps}/>
<TextBox className="p-Home ServiceDescription bpt" {...ServiceDescriptionProps} {...ServiceDescriptionCb} {...ServiceDescriptionIoProps}/>
</Flex>
<Flex className="p-Home FlexBox42 bpt" {...FlexBox42Props} {...FlexBox42Cb} {...FlexBox42IoProps}>
<Flex className="p-Home ServicePart1 bpt" {...ServicePart1Props} {...ServicePart1Cb} {...ServicePart1IoProps}>
<Flex className="p-Home FlexServiceicon1 bpt" {...FlexServiceicon1Props} {...FlexServiceicon1Cb} {...FlexServiceicon1IoProps}>
<Image className="p-Home Serviceicon11 bpt" {...Serviceicon11Props} {...Serviceicon11Cb} {...Serviceicon11IoProps}/>
</Flex>
<Flex className="p-Home FlexServicehead1 bpt" {...FlexServicehead1Props} {...FlexServicehead1Cb} {...FlexServicehead1IoProps}>
<TextBox className="p-Home Servicehead1 bpt" {...Servicehead1Props} {...Servicehead1Cb} {...Servicehead1IoProps}/>
</Flex>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home ServicePart2 bpt" {...ServicePart2Props} {...ServicePart2Cb} {...ServicePart2IoProps}>
<Flex className="p-Home FlexServiceicon2 bpt" {...FlexServiceicon2Props} {...FlexServiceicon2Cb} {...FlexServiceicon2IoProps}>
<Image className="p-Home Serviceicon2 bpt" {...Serviceicon2Props} {...Serviceicon2Cb} {...Serviceicon2IoProps}/>
</Flex>
<Flex className="p-Home FlexServicehead2 bpt" {...FlexServicehead2Props} {...FlexServicehead2Cb} {...FlexServicehead2IoProps}>
<TextBox className="p-Home Servicehead2 bpt" {...Servicehead2Props} {...Servicehead2Cb} {...Servicehead2IoProps}/>
</Flex>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Flex>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home ServicePart3 bpt" {...ServicePart3Props} {...ServicePart3Cb} {...ServicePart3IoProps}>
<Flex className="p-Home FlexServiceicon3 bpt" {...FlexServiceicon3Props} {...FlexServiceicon3Cb} {...FlexServiceicon3IoProps}>
<Image className="p-Home Serviceicon3 bpt" {...Serviceicon3Props} {...Serviceicon3Cb} {...Serviceicon3IoProps}/>
</Flex>
<Flex className="p-Home FlexServicehead3 bpt" {...FlexServicehead3Props} {...FlexServicehead3Cb} {...FlexServicehead3IoProps}>
<TextBox className="p-Home Servicehead3 bpt" {...Servicehead3Props} {...Servicehead3Cb} {...Servicehead3IoProps}/>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Flex>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock5 bpt" {...FlexBlock5Props} {...FlexBlock5Cb} {...FlexBlock5IoProps}>
<Flex className="p-Home FlexBox51 bpt" {...FlexBox51Props} {...FlexBox51Cb} {...FlexBox51IoProps}>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Flex className="p-Home FlexHead5 bpt" {...FlexHead5Props} {...FlexHead5Cb} {...FlexHead5IoProps}>
<TextBox className="p-Home Head5 bpt" {...Head5Props} {...Head5Cb} {...Head5IoProps}/>
</Flex>
<Flex className="p-Home FlexDescription5 bpt" {...FlexDescription5Props} {...FlexDescription5Cb} {...FlexDescription5IoProps}>
<TextBox className="p-Home Description5 bpt" {...Description5Props} {...Description5Cb} {...Description5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flexviewallprojects bpt" {...FlexviewallprojectsProps} {...FlexviewallprojectsCb} {...FlexviewallprojectsIoProps}>
<Button className="p-Home View_all_projects bpt" {...View_all_projectsProps} {...View_all_projectsCb} {...View_all_projectsIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FlexBox52 bpt" {...FlexBox52Props} {...FlexBox52Cb} {...FlexBox52IoProps}>
<Flex className="p-Home FlexGallery bpt" {...FlexGalleryProps} {...FlexGalleryCb} {...FlexGalleryIoProps}>
<Flex className="p-Home Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Flex>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home NavButton bpt" {...NavButtonProps} {...NavButtonCb} {...NavButtonIoProps}>
<Button className="p-Home Prev bpt" {...PrevProps} {...PrevCb} {...PrevIoProps}/>
<Button className="p-Home Next bpt" {...NextProps} {...NextCb} {...NextIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock6 bpt" {...FlexBlock6Props} {...FlexBlock6Cb} {...FlexBlock6IoProps}>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Flex>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Flex>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock7 bpt" {...FlexBlock7Props} {...FlexBlock7Cb} {...FlexBlock7IoProps}>
<Flex className="p-Home FlexBox71 bpt" {...FlexBox71Props} {...FlexBox71Cb} {...FlexBox71IoProps}>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FlexBox72 bpt" {...FlexBox72Props} {...FlexBox72Cb} {...FlexBox72IoProps}>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock8 bpt" {...FlexBlock8Props} {...FlexBlock8Cb} {...FlexBlock8IoProps}>
<Flex className="p-Home FlexBox81 bpt" {...FlexBox81Props} {...FlexBox81Cb} {...FlexBox81IoProps}>
<Flex className="p-Home FlexEducation bpt" {...FlexEducationProps} {...FlexEducationCb} {...FlexEducationIoProps}>
<Image className="p-Home Book bpt" {...BookProps} {...BookCb} {...BookIoProps}/>
<TextBox className="p-Home Education bpt" {...EducationProps} {...EducationCb} {...EducationIoProps}/>
</Flex>
<Flex className="p-Home FlexEducationbody bpt" {...FlexEducationbodyProps} {...FlexEducationbodyCb} {...FlexEducationbodyIoProps}>
<Flex className="p-Home Educationbody1 bpt" {...Educationbody1Props} {...Educationbody1Cb} {...Educationbody1IoProps}>
<Flex className="p-Home Educationbody11 bpt" {...Educationbody11Props} {...Educationbody11Cb} {...Educationbody11IoProps}>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
</Flex>
<Flex className="p-Home Educationbody12 bpt" {...Educationbody12Props} {...Educationbody12Cb} {...Educationbody12IoProps}>
<TextBox className="p-Home Uprightarrow bpt" {...UprightarrowProps} {...UprightarrowCb} {...UprightarrowIoProps}/>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Educationbody2 bpt" {...Educationbody2Props} {...Educationbody2Cb} {...Educationbody2IoProps}>
<Flex className="p-Home Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Flex>
<Flex className="p-Home Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Educationbody3 bpt" {...Educationbody3Props} {...Educationbody3Cb} {...Educationbody3IoProps}>
<Flex className="p-Home Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
</Flex>
<Flex className="p-Home Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FlexBox82 bpt" {...FlexBox82Props} {...FlexBox82Cb} {...FlexBox82IoProps}>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<TextBox className="p-Home TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
</Flex>
<Flex className="p-Home Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<Flex className="p-Home Flex186 bpt" {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<Flex className="p-Home Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<Flex className="p-Home Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<TextBox className="p-Home TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex>
<Flex className="p-Home Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox className="p-Home TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<Flex className="p-Home Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Flex className="p-Home Flex192 bpt" {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox className="p-Home TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
</Flex>
<Flex className="p-Home Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<TextBox className="p-Home TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<TextBox className="p-Home TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex198 bpt" {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<Flex className="p-Home Flex197 bpt" {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<Flex className="p-Home Flex196 bpt" {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex>
<Flex className="p-Home Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock9 bpt" {...FlexBlock9Props} {...FlexBlock9Cb} {...FlexBlock9IoProps}>
<Flex className="p-Home Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Flex>
<Flex className="p-Home Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<Carousel className="p-Home Carousel3 bpt" {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock10 bpt" {...FlexBlock10Props} {...FlexBlock10Cb} {...FlexBlock10IoProps}>
<Flex className="p-Home FlexBox101 bpt" {...FlexBox101Props} {...FlexBox101Cb} {...FlexBox101IoProps}>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex>
<Flex className="p-Home FlexBox102 bpt" {...FlexBox102Props} {...FlexBox102Cb} {...FlexBox102IoProps}>
<Flex className="p-Home Flex206 bpt" {...Flex206Props} {...Flex206Cb} {...Flex206IoProps}>
<Accordion className="p-Home Accordion1 bpt" {...Accordion1Props} {...Accordion1Cb} {...Accordion1IoProps}/>
<Accordion className="p-Home Accordion2 bpt" {...Accordion2Props} {...Accordion2Cb} {...Accordion2IoProps}/>
<Accordion className="p-Home Accordion3 bpt" {...Accordion3Props} {...Accordion3Cb} {...Accordion3IoProps}/>
<Accordion className="p-Home Accordion4 bpt" {...Accordion4Props} {...Accordion4Cb} {...Accordion4IoProps}/>
</Flex>
<Flex className="p-Home Flex207 bpt" {...Flex207Props} {...Flex207Cb} {...Flex207IoProps}>
<Accordion className="p-Home Accordion8 bpt" {...Accordion8Props} {...Accordion8Cb} {...Accordion8IoProps}/>
<Accordion className="p-Home Accordion5 bpt" {...Accordion5Props} {...Accordion5Cb} {...Accordion5IoProps}/>
<Accordion className="p-Home Accordion6 bpt" {...Accordion6Props} {...Accordion6Cb} {...Accordion6IoProps}/>
<Accordion className="p-Home Accordion7 bpt" {...Accordion7Props} {...Accordion7Cb} {...Accordion7IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FlexBlock11 bpt" {...FlexBlock11Props} {...FlexBlock11Cb} {...FlexBlock11IoProps}>
<Flex className="p-Home Flex213 bpt" {...Flex213Props} {...Flex213Cb} {...Flex213IoProps}>
<TextBox className="p-Home TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex>
<Flex className="p-Home Flex212 bpt" {...Flex212Props} {...Flex212Cb} {...Flex212IoProps}>
<Flex className="p-Home Flex211 bpt" {...Flex211Props} {...Flex211Cb} {...Flex211IoProps}>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<Flex className="p-Home Flex231 bpt" {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<Link className="p-Home Link10 bpt" {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex210 bpt" {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}>
<Flex className="p-Home Flex222 bpt" {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<Flex className="p-Home Flex220 bpt" {...Flex220Props} {...Flex220Cb} {...Flex220IoProps}>
<Link className="p-Home Link1 bpt" {...Link1Props} {...Link1Cb} {...Link1IoProps}/>
</Flex>
<Flex className="p-Home Flex219 bpt" {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<Link className="p-Home Link4 bpt" {...Link4Props} {...Link4Cb} {...Link4IoProps}/>
</Flex>
<Flex className="p-Home Flex221 bpt" {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<Link className="p-Home Link6 bpt" {...Link6Props} {...Link6Cb} {...Link6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex226 bpt" {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<Flex className="p-Home Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Link className="p-Home Link2 bpt" {...Link2Props} {...Link2Cb} {...Link2IoProps}/>
</Flex>
<Flex className="p-Home Flex225 bpt" {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<Link className="p-Home Link5 bpt" {...Link5Props} {...Link5Cb} {...Link5IoProps}/>
</Flex>
<Flex className="p-Home Flex223 bpt" {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Link className="p-Home Link7 bpt" {...Link7Props} {...Link7Cb} {...Link7IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex230 bpt" {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<Flex className="p-Home Flex228 bpt" {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<Link className="p-Home Link3 bpt" {...Link3Props} {...Link3Cb} {...Link3IoProps}/>
</Flex>
<Flex className="p-Home Flex229 bpt" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Link className="p-Home Link8 bpt" {...Link8Props} {...Link8Cb} {...Link8IoProps}/>
</Flex>
<Flex className="p-Home Flex227 bpt" {...Flex227Props} {...Flex227Cb} {...Flex227IoProps}>
<Link className="p-Home Link9 bpt" {...Link9Props} {...Link9Cb} {...Link9IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex232 bpt" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
