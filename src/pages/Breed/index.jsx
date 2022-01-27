import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TextInput, SafeAreaView, Touchable, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRoute } from "@react-navigation/native";
import { Input } from '../../components/Input'
import DogLoadingAnimation from '../../../assets/dogLoadingAnimation.json'
import CatLoadingAnimation from '../../../assets/catLoadingAnimation.json'

const data = {
  dog: [
    {
      name: 'Husky',
      image_url: "https://s3-alpha-sig.figma.com/img/f03a/753c/0b6b0ea4c320fcba940c4f72ea0eedde?Expires=1644192000&Signature=KD0hi1yGHLB-nujnHeYTK~PT5R~XeoNgEI3X3gtQHDidwy9EvaxU7lP80EuEdfPVXuUKg7Bor6BAbnLMml-2CCCtgf84b0m9k2wPi6k-uHmn6K4aJbbY-UycTaOiNTOzyJAu8~svTlhNLsoL-BEf-sMcpgBX3h-YFUCsLGWlrBVLSPVtxpSxsr3ZnB3IKSmHKFV~HcVqR0E66sK1BccJbNrd20Kc4apyV5a-bhzcUDSOYJ7v3bcAJO9hznqM7hez7yVvlrGeBdQHRMlTLhELQB-pP2NBiFDalM9Mu5FpJZ-MWB2E91V4d5bRCr0IZLDcBQwn~Yc-VnJxgwmfiO5zow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      name: 'Vira-lata',
      image_url: "https://s3-alpha-sig.figma.com/img/5cb1/8884/e3f6cc85f3566feb051e00920e060a88?Expires=1644192000&Signature=K240HBmtYepfxvtmsDUlFrVQUTSjPweNMBGRAvC-7-NP8HcHKdPfN-TtvrI5kJZ3ubDGpufhBJ0Jt0F6fnklqwSha06Gl1e780JmH6PoBya87Nnh6ql89YuJsb5PwSFAimQHdzndymfeDhZ2Ym~hBeG7DDcYR-xCNSchdCpDC-5YFc-gR0DgLz2csawZq9Pz9Z7tB7u30aV~l9UyKGRScVbxdsoyr58lIEmpCGSyUuZCTM3E8R-WLPNgmUhLwaVjG50YkDMKDtoeRUq27AB0Ph7XSlEjUwJhdy8NGdGvcpwdqwzv4iEWAfsqkDSSDLlhprc5EidjeasuJRBixjAcMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      name: 'Pug',
      image_url: "https://s3-alpha-sig.figma.com/img/600a/15f3/09d07772c585f538b8b6358f3e26faf0?Expires=1644192000&Signature=fK38lbqO4jsASbQ9pvWZZmdxRujt4IqELxmZNoe0Lw-QPm1u7sLK0MIaU4g3TyNuP8ZDNl4VuYDpQeawXG8KnPbrLRM9cYEpKWTwI~073gzc7jCp8iiv7nCKzIZ8Bgg6Na51gBQSeSqMBTkRo6rBmr7lCqMNlrQQ9aoEzdtDvyKvU-tXNbkHjytRYQRRHZ6JanLMAx5~2SEGokz5KWeQVdXT0FYWsKHKR08npuiqZZOw9u1xTehIa4eH3keWz8LeNjiTaoaWa-LO3zEEZB4NhsOyrrByJlE7CUkGVemdJU9cI0L7ItxMlxVXKp1ztxY1DcDeoAm9btwepTUXF6CbCw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      name: 'Golden',
      image_url: "https://s3-alpha-sig.figma.com/img/f2b6/a51e/2ceccdad84ebf5bb6ab1ed9da5560bc5?Expires=1644192000&Signature=EwyoUkNNOqlvba6yGvphjM2zZZgRwi6HWFffZW9zvOUxpIJtaDh3frHNbCpUSoCa2X~JPbNh4Sr6eyHhciypERVJvBLI5irTx~av1Xkc6kRH9kLpCzMJHNCMmFdsFpD-pXtN5kfq~Jjgy5d1-FphazcdOYnbnLTzZxSve1ZrWSxwXX37H0beMSFHqS0QTG9WCvdM3yAazg-nagJkUINQPCry~DoeDBopDhPP6tDOc4kg6oflzHr3on64MhW20X5LoXMYLl6Sno6NkdMuje6ScAp2Nq5NrrOjlfBPoBlbNCFEziLk814oPQ5iIpBO6QdGyMRz75tiM2Lo25pDY87ZHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    // {
    //   name: 'Beagle',
    //   image_url: 'https://s3-alpha-sig.figma.com/img/498c/5e6f/aa59283d781a8564392efcbef3c208a4?Expires=1643587200&Signature=cfhxsnmclrG0TKdmK0iC55yX-QZc4jBkO5b5Y4ygR4cbnaUWY5GrbIpxv60ymB9fPE4PmipcF2y~s~lkev~YJfKxpvpzzL9h92SIfmm7BykZNF7WQ5x-F0mcQfAYJghbVJPJjae9fiBv78EHWEVJ88hCHfb5AY6-ypl2VWQQsOL3Kj75PyfSUTpUNashlr7642aCnJy8fnDAbxgiTE4P60bL2n8IjJvUS01I9F~WnD9GO-4sMpfseUcFlfyZbTpO7~IPXNVDghGfZF~IQJmFnmpOxJ8Enbadp3HFbXDJ5sPLYstUxkvO0OzMwTkhajB9uSgFyX8G2H5zWb-E05RYQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    // },
  ],

  cat: [
    {
      name: 'Persa',
      image_url: "https://s3-alpha-sig.figma.com/img/01ad/cbef/f2946eab5a26088a48377d5090e09cbb?Expires=1644192000&Signature=MmhFyI3YkcAqS1GYaWZxIUIua-6hgzaPdCSb2BXmXPEfEGPl~mclhWcinjhuLpEPXAPRC06Pf0wPMmZ2-DtxBw~d65aYa4CXAwfwDgyK4Vh3KZbG17uBuZJrLioj0u5J1E1ru7e7ljVgpRHMTx60v9aec46qccdwEa~AD3~3LbP8HNij3NCgIayti3kfMw-9VRX2bCWLaiyBBLPcB9aUq8TRUVgnD5ItyyzHCvs-avQvod65QenY255OBPX2SgA~phZucUIIfVOZ8CfHFRIvn3Sa0p~3l856MzKjzcrqcyTxmBO8sK4gRxIVPlQY0zWvgtE~bAgB~cbn--jnxkyEDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      name: 'Siamês',
      image_url: "https://s3-alpha-sig.figma.com/img/bf6b/f585/09a0e62393f023d2dad865709c5af70a?Expires=1644192000&Signature=b3EvErPpkiRCjvmo~Wjm8f9P1XxxQdtsTfBWlQByYDm02uvw2NvSVsGx4Oi-FdRX5LwfOD~QZfwrWd-poL5xaF2K7m-VXvDBLiTXj8TIdR83oa-t638xANeNePzaOvOR-eDM6cLpQZmu1ZbfxeGyQ68Lz11s~I9xV~CvhwnC-QlxVd~3S7TAd4CNOIVSpJARtFdKzDTQi93zkWhvbfs2MX5Nzr-uWKVBjwh88f~tEe-d3q6xVFfK7xtsb5cqt2~mFcbPb1kye8-fpcp4wsktnTaEQXte2TJCU9oKpvBCBlrfRpfV7zCr9YbqwCtdxkFEE~sWxnrBimka~4UZSjkbBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      name: 'Ragdoll',
      image_url: "https://s3-alpha-sig.figma.com/img/4297/9266/cd2585f54ef9582740cdc137c7203171?Expires=1644192000&Signature=T686u7JXspvliRjuOc1FaK-x85lVEmBHk4hqDvG67TP61bVrgmBgvFeeVZWQk1Bb4I8AqHucuWmX-r0xoU6Bpaa6SCUpx40p-Z2zniTxircBtwVzZ~92xRDkuWPakwIxCFPlIScgUgI8LxZ6SpX-23Hm8Jq5QrLg8wdAhJK7bEt-DEzSaLM7NWA0PeoqtIM1pKxqbo5tEBxbDI3uRDS2Y5cIt0hCp5XsHCt8V1q-UzaM6SiG5uG9VcvdslFiDtP9IUDmE36LxRgdgwwvzEkTm9sN7rGgyKbObJkUlvAg3xOUBgK6tycMV-Uuj8defznb90dnL-9QZmx5ZSA-v-r5dA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
      name: 'Sphynx',
      image_url: "https://s3-alpha-sig.figma.com/img/a99d/6881/89e5937ed8669bc71818aff3abc2f390?Expires=1644192000&Signature=TN6BlR65JhOUQvopRGmR8-qfPdPdAHUg-UAIYx9CivPGAR16CAdZoeAijMOhteuQ5aw~CZIcku1H292gI4hXg31WL4diqFkUsdT23ZiatPHG0l35g3zTt8tK0fWpb7lVedDRvPgTb7G0SduAdcfeN~HKJw5-3hjwUwt67cLWNZT~kIXU8SVgGzRYce3EpHbpOkZj5KKYtYuE4~Lab4YJ0y3sWS91qxkb~fNpv7gSW5iM~auGyjjmBR3VRrHglIZh~Lk~5vEyrfk2Hzi8qyB-fVzwS25ywnLu20j4JbTbfjS5-0ET0BxgHnQ8Q~FmwV4FLwF-52UZJmBhfS2~fu8T9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
  ]
}

export function Breed() {
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const { params } = useRoute();
  const [dogList, setDogList] = useState(data[params.petType]);


  const [selectedBreed, setSelectedBreed] = useState({
    name: '',
    image_url: ""
  })

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    if (params.petType === 'dog') {
      return (
        <View style={styles.animationContainer}>
          <LottieView
            style={{ width: 300, height: 300 }}
            source={DogLoadingAnimation}
            autoPlay
            loop
          />
        </View>
      )
    }

    if (params.petType === 'cat') {
      return (
        <View style={styles.animationContainer}>
          <LottieView
            style={{ width: 400, height: 400 }}
            source={CatLoadingAnimation}
            autoPlay
            loop
          />
        </View>
      )
    }
  }

  const results = dogList.filter((dog) => dog.name.includes(searchValue));

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Eba</Text>
            <Text style={styles.text}>Amamos um doguinho, agora conta para a gente, qual é a raça dele(a)?</Text>
            <Input
              iconName="search"
              placeholder="Search"
              value={searchValue}
              onChangeText={(value) => setSearchValue(value)}
            />
          </View>
          <FlatList
            horizontal={false}
            style={styles.flatList}
            numColumns={2}
            data={results}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View
                style={{ width: 10, height: 10, }}
              />
            )}
            keyExtractor={({ image_url }) => image_url}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setSelectedBreed(item)}
                activeOpacity={1}
                style={{
                  ...styles.petBox,
                  borderColor: selectedBreed.name === item.name ? '#7130CD' : '#A7A7A7',
                  borderWidth: selectedBreed.name === item.name ? 2 : 1,
                  marginLeft: index % 2 === 0 ? 0 : 5, // par ? 0 : 5
                  marginRight: index % 2 === 0 ? 5 : 0,  // par ? 5 : 0
                }}
                >
                <Text style={styles.petBreed}>{item.name}</Text>
                <Image source={{ uri: item.image_url }} style={styles.petImage} />
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    height: '100%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },

  title: {
    fontSize: 36,
    fontFamily: 'Nunito_700Bold'
  },

  text: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    marginBottom: 24,
  },

  flatList: {
    width: '100%',
  },

  petBox: {
    borderWidth: 1,
    borderRadius: 16,
    flex: 1 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  petBreed: {
    paddingTop: 10,
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
  },

  petImage: {
    height: 150,
    width: 140,
  },

  bottomBox: {
    width: '100%',
    height: 100,
    backgroundColor: 'blue'
  }
})
