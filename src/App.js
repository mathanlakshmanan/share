
import './App.css';

function App() {
  // const [selectedFile, setSelectedFile] = useState({});

  const setSelectedFile = async(e)=>{
//     e.preventDefault();
    console.log("working");
    console.log("selectedFile", e.target.files[0]); 
      // try {
      //   await navigator.share({
      //     title: "Example File",
      //     text: 'Check out web.dev.',
      //     url: 'https://web.dev/',
      //     files: [e.target.files[0]]
      //   });
      // } catch (err) {
      //   console.error("Share failed:", err.message);
      // }


    if (navigator.canShare && navigator.canShare({ files: e.target.files[0] })) {
      navigator.share({
        files: e.target.files[0],
        title: 'Vacation Pictures',
        text: 'Photos from September 27 to October 14.',
      })
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed', error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }


    // if (navigator.share) {
    //   navigator.share({
    //     title: 'web.dev',
    //     text: 'Check out web.dev.',
    //     url: 'https://web.dev/',
    //   })
    //     .then(() => console.log('Successful share'))
    //     .catch((error) => console.log('Error sharing', error));
    // }

    // const shareButton = document.getElementById("shareFile");
    // const data = [];
    // shareButton.addEventListener("click", async () => {
    //   const file = new File(data, e.target.files[0].name, { type: e.target.files[0].type });
    //   try {
    //     await navigator.share({
    //       title: "Example File",
    //       text: 'Check out web.dev.',
    //       url: 'https://web.dev/',
    //       files: [file]
    //     });
    //   } catch (err) {
    //     console.error("Share failed:", err.message);
    //   }
    // });
  }
 
  
  return (
   <>
    <form id="form">
        <input
          id='shareFile'
          name='shareFile'
          type="file"
          // value={selectedFile}
          onChange={(e) => setSelectedFile(e)}
        />
        {/* <input type='submit' className='btn btn-primary' value={'Share'} onClick={()=>share()} /> */}
      </form>
   
   </>
  );
}

export default App;
