import Global_L from "leaflet";

/**
 * This class Singleton Class is initiated first at Timeline Wrapper
 */
export class MapSingleton {

  static instance = null;
  container = null;
  LeafletInstance = null;
  L = null;
  sideBySide = null;

  constructor({container , view: {LL, zoomLevel}, }) {
      
    if(MapSingleton.instance ===null){
       this.container = container;
       this.LeafletInstance = Global_L.map(container).setView(LL, zoomLevel);
       this.L = Global_L;
    }
    MapSingleton.instance = this;
  }

  /**
     * getting object of singletonTimeLine class
  */
  getInstance = () =>{
    return MapSingleton.instance;
  }

  /**
   *
   * @returns the instance of Timeline class
   */

  getLeafletInstance() {
      return this.LeafletInstance;
  };

  getLeafletObject(){
    return this.L;
  }
  
  
  getMapRef() {
    return this.container
  }
}
