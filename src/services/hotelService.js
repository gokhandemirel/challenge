class HotelService {
    getHotel() {
        return JSON.parse(localStorage.getItem('hotel'));
    }
    setHotel(data) {
        localStorage.setItem('hotel', JSON.stringify([...this.getHotel(), data]));
    }
    updateRate(data, type, setHotel) {
        const hotel = this.getHotel()
        const index = hotel.findIndex((x) => x.id === data.id);
        hotel[index].rate = type === 'minus' ? data.rate - 1 : data.rate + 1;
        hotel[index].updatedDate = new Date();
        setHotel(hotel);
    }
}

export default new HotelService;