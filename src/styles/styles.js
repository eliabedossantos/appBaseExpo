import {StyleSheet} from 'react-native';

import colors from './colors';
import fonts from './fonts';


const styles = StyleSheet.create({
  // ---> Styles full

  content: {

    alignItems: 'center',
    paddingBottom: 30
  },

  section: {
    backgroundColor: colors.white,

  },

  // ---> Login Styles

  imageLogin: {
    height: 278,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
    overflow: 'hidden',
  },

  textRecovery: {
    color: colors.primaryText,
    textDecorationColor: colors.primaryText,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },

  viewRecovery: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },

  // ---> form styles

  titleForm: {
    fontSize: fonts.bigger,
    fontWeight: '800',
    color: colors.dark,
    marginBottom: 16,
  },

  contentForm: {
    // backgroundColor: colors.primary,
  },

  contentSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 4,
    backgroundColor: colors.greyLight,
    marginTop: 14,
  },

  textAceite: {
    fontSize: fonts.regular,
    color: colors.dark,
    fontFamily: 'Asap-Regular',
  },

  // ---> sing style

  contentAddUserImage: {
    paddingVertical: metrics.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addImageUser: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },

  iconAddUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.greyLight,
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },

  readTermsBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: metrics.padding,
  },

  textDefault: {
    fontSize: fonts.regular,
    color: colors.dark,
    textDecorationLine: 'underline',
  },

  // ---> input none

  contentInput: {
    flexDirection: 'column',
    marginBottom: 13,
  },

  labelInput: {
    fontSize: fonts.default,
    color: colors.grey,
  },

  sectionInput: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 2,
  },

  inputView: {
    flex: 1,
    flexDirection: 'column',
  },

  inputDefault: {
    paddingLeft: 10,
    height: 45,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInputNone: {
    fontSize: fonts.default,
    color: colors.dark,
    marginRight: 12,
  },

  borderInput: {
    height: 1,
    backgroundColor: colors.greyLight,
  },

  // ---> home
  home: {
    // flex: 1,
  },

  imageHome: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  imageBackground: {
    width: '100%',
    // height: 390,
    position: 'relative',
    overflow: 'visible',
    zIndex: 0,
  },

  backgroundColor: {
    // flex: 1,
    // backgroundColor: 'hsla(140, 10%, 3%, 0.5)',
    // alignItems: 'center',
    // justifyContent: 'space-between'
  },

  container: {
    width: '100%',
    paddingHorizontal: 25,
   // paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    width: '100%',
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 16,
  },

  logo: {
    width: 110,
    height: 35,
  },

  menuIcon: {
    width: 24,
    height: 18,
  },

  titleBgHome: {
    fontSize: 36,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Bold',
    color: '#FFD11C',
    marginBottom: 25,
    marginTop: -25
  },

  subTitleBgHome: {
    width: '65%',
    fontSize: 20,
    fontFamily: 'Montserrat',
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ---> AJUDA/PERGUNTAS FREQUENTES/QUEM SOMOS
  header: {
    backgroundColor: '#E5E5E5',
    height: '100%',
  },

  TextHelpMe: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: '#3C3C3B',
    marginTop: 47,
    marginLeft: 19,
  },
  TextTalkToUs: {
    backgroundColor: 'white',
    width: 347,
    height: 60,
    borderRadius: 8,
    marginLeft: 25,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  TakeYourDoubts: {
    backgroundColor: 'white',
    width: 347,
    height: 48,
    borderRadius: 8,
    marginLeft: 25,
    marginTop: 25,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 45,
    fontFamily: 'Montserrat-Medium',
    color: '#8F95A1',
    fontSize: 12,
  },
  containerLogin: {
    flex: 1,
    backgroundColor: colors.background,
  },
  AllLists: {
    backgroundColor: '#E5E5E5',
    width: 100,
    height: 23,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#454F63',
    color: '#454F63',
    marginLeft: 21,
  },
});

export {colors, fonts, metrics, styles};
