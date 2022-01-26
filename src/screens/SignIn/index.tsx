import { useNavigation } from '@react-navigation/native';

import { View, Image, Text} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home' as never);
  }
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
        title='Entrar com o discord'
        onPress={handleSignIn}
        />
      </View>
    </View>
  );
}//1:34:42