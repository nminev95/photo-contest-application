import { useEffect } from "react";
import { useDropzone } from 'react-dropzone';
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    justifyContent: 'center'
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    justifyContent: 'center',
    width: 300,
    height: 300,
    padding: 4,
    boxSizing: 'border-box',
    alignItems: 'center'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
    maxHeight: '300px',
};

const useStyles = makeStyles((theme) => ({
    uploadBox: {
        marginTop: '30px',
        marginBottom: '30px',
        marginLeft: '85px',
        width: '30vw',
        [theme.breakpoints.only('xs')]: {
            width: '60vw',
        },
        [theme.breakpoints.only('sm')]: {
            width: '40vw',
        },
        [theme.breakpoints.only('md')]: {
            width: '40vw',
        },
        transition: '0.5s all ease-in-out',
        '&:hover': {
            boxShadow: `0px 0px 1px 1px`,
            opacity: '0.7',
            cursor: 'pointer'
        },
    }
}))

const ImageDropAndUpload = ({ file, setFile }) => {
    const styles = useStyles()
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFile(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    useEffect(() => () => {
        file.forEach(file => URL.revokeObjectURL(file.preview));
    }, [file]);

    const thumbs = file.map(file => (
        <div 
        style={thumb} 
        key={file.name}>
            <div 
            style={thumbInner}>
                <img
                    alt={file.name}
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ))
    return (
        <section 
        className={styles.uploadBox}
        style={{ border: '1px lightgray solid', borderRadius: '5px', textAlign: 'center' }}>
            <div 
            style={{ outline: 'none' }} {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p 
                style={{ color: "gray", marginTop: '15px' }}><AddAPhotoIcon 
                fontSize='large' />
                Click here to upload your entry or simply drag and drop.
                </p>
                <aside 
                style={thumbsContainer}>
                    {thumbs}
                </aside>
            </div>
        </section>

    );
}

export default ImageDropAndUpload;