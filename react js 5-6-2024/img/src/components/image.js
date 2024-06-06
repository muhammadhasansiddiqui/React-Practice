function Image({ wd, src }) {
    const links = src.split(",");
  
    return (
      <div>
        {links.map((e, index) => (
          <img key={index} width={wd} class="img" src={e.trim()} alt={`image-${index}`} />
        ))}
      </div>
    );
  }
  
  export default Image;