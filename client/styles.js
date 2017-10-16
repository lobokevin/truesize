const colors = {}
colors.blue = '#0093D8'
colors.red = '#D9534F'
colors.white = 'white'
colors.black = 'black'
colors.transparent = 'rgba(0,0,0,0)'

export default {
  center: {
    textAlign: 'center',
  },
  horizontal: {
    flexDirection: 'row',
  },
  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  redText: {
    color: colors.red,
  },
  whiteText: {
    color: colors.white,
  },
  marginTop10: {
    marginVertical: 10,
  },
  marginSide1: {
    marginHorizontal: 1,
  },
  marginSide5: {
    marginHorizontal: 5,
  },
  marginSide10: {
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  blueText: {
    color: '#0093D8',
  },
  paddingVert15: {
    paddingVertical: 15,
  },
  paddingVert10: {
    paddingVertical: 10,
  },
  paddingVert5: {
    paddingVertical: 5,
  },
  paddingSide10: {
    paddingHorizontal: 10,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  backgroundWhite: {
    backgroundColor: 'white',
  },
  backgroundBlack: {
    backgroundColor: 'black',
  },
  backgroundBlue: {
    backgroundColor: colors.blue,
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  backgroundTransWhite: {
    backgroundColor: 'rgba(255,255,255,.5)',
  },
  backgroundTransparent: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  searchBar: {
  },
  navButton: {
    height: 35,
    width: 45,
    textAlign: 'center',
    paddingVertical: 5,
  },
  roundedRectangle: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#0093D8',
  },
  navMargin: {
    marginTop: 30,
    marginBottom: 5,
  },
  maxWidth: {
    maxWidth: 350
  }
}
