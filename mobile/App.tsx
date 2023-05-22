import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto"
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree"
import blurBg from "./src/assets/luz.png"
import Stripes from "./src/assets/FrameLeft.svg"
import { styled } from "nativewind"
import Logo from "./src/assets/logo.svg"

const StyledStriples = styled(Stripes)

export default function App() {

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })
  if (!hasLoadedFonts) {
    return null;
  }
  return (
    <ImageBackground source={blurBg}
      className='bg-gray-900 flex-1 items-center relative px-8 py-10'
      imageStyle={{ position: 'absolute', left: '-100%' }}>
      <StyledStriples className="absolute left-2" />
      <View className='flex-1 items-center justify-center gap-6'>
        <Logo />
        <View className='space-y-2 p-8'>
          <Text className='text-gray-50 font-title text-center text-2xl leading-tight '> Sua Capsula do Tempo</Text>
          <Text className='text-gray-50 font-body text-center text-base '> Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-3' >
          <Text className='font-alt text-sm uppercase text-black'>COMEÇAR A CADASTRAR</Text>
        </TouchableOpacity>
        <StatusBar style='light' translucent />
      </View>
      <Text className='text-center font-body text-sm leading-relaxed text-gray-200 '> Feito com carinho por mim </Text>
    </ImageBackground>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontWeight:'700',

//   },
// });
