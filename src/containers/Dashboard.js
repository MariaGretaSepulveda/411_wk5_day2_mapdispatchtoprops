import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar, addCar } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cars: state.cars
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
    removeCar: (index) => dispatch(removeCar(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)