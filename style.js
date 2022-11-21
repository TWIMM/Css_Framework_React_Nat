import { Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const styles = {
    container: {
       width: width, 
       height: height, 
       padding: width*0.05, 
       display:'flex',
    } , 

    header_horizontal: {
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        
    } , 

    


}; 
export default styles; 