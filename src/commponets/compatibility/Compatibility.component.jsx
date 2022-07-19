import './Compatibility.style.scss'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

function Compatibility({data}) {

    const getIconElement = (name) => {
        console.log(name)
        switch (name) {
            case 'apple':
                return <AppleIcon key={name} fontSize="small" />
            case 'ios':
                return <span key={name} >iOS</span>
            case 'android':
                return <AndroidIcon key={name} fontSize="small" />
        }
    }

    return (
      <div className="Compatibility">
        <label>Compatibility</label>
        { data.map(name=> getIconElement(name)) }
      </div>
    )
}

export default Compatibility
