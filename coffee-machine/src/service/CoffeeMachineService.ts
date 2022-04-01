class CoffeeMachineService {

    public static CupLimit(limit: number) {
        if (limit >= 1) {
            limit -= 1
        }
        return limit
    }

    public static BinLimit(limit: number) {
        if (limit >= 15) {
            limit -= 15
        }
        return limit
    }

    public static WaterLimit(limit: number) {
        if (limit >= 150) {
            limit -= 150
        }
        return limit
    }

}

export default CoffeeMachineService