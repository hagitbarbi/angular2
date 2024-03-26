export default class Utils {
    static groupBy(xs:any[],key: string){
        return xs.reduce((rv,x)=>{
            (rv[x[key]]= true || []);
            return rv;
        }, {});
    }

    static sortString(xs: any[],key:string,desc:boolean){
        return xs.sort((a,b)=>{
            let nameA =a[key].toUpperCase();
            let nameB =b[key].toUpperCase();
            if(desc){
                if(nameA>nameB) {return -1}
                if(nameA<nameB) {return 1}
            }else{
                if(nameA<nameB) {return -1} 
                if(nameA>nameB) {return 1} 

            }
            return 0;
        });
    }

    static sortNumber(xs: any[],key:string,desc:boolean){
        return xs.sort((a,b)=>{
            if(desc){
                return b[key]- a[key];
            }else{
                return a[key]- b[key];
            }
        });
    }
    
}