import { Oval } from 'react-loader-spinner';

const OvalLoader = ({ width, height }) => {
    return (
        <Oval
            height={height}
            width={width}
            color="#168FFF"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="white"
            strokeWidth={2}
            strokeWidthSecondary={2}

        />
    )
}

export default OvalLoader;