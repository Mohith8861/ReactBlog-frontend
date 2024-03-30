export default function Article({ S }) {
  return (
    <div className="contentbox">
      {S.content.map((item, i) => (
        <div key={i} className="bigbox">
          {item.heading && <h1 className="article-heading">{item.heading}</h1>}
          {(item.text || item.img) && (
            <div className="box">
              {item.text && (
                <div className="textbox">
                  <p>{item.text}</p>
                </div>
              )}
              {item.img && (
                <div className="imgbox1">
                  <div className="imgbox">
                    {item.img && (
                      <img className="image" src={item.img} alt={item.imgcap} />
                    )}
                    {item.text && <p>{item.imgcap}</p>}
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="subtextbox">
            {item.subtext &&
              item.subtext.map((subtext, i) => (
                <div className="box" key={i}>
                  <div className="textbox">
                    {subtext.title && (
                      <p className="article-subheading">{subtext.title}</p>
                    )}
                    <p>{subtext.text}</p>
                  </div>
                  {subtext.img && (
                    <div className="imgbox1">
                      <div className="imgbox">
                        {subtext.img && (
                          <img
                            className="image"
                            src={subtext.img}
                            alt={subtext.imgcap}
                          />
                        )}
                        {subtext.text && <p>{subtext.imgcap}</p>}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div className="imggal">
            {item.subimg &&
              item.subimg.map((img, i) => (
                <div className="galimgbox1" key={i}>
                  <div className="galimgbox">
                    {img.img && (
                      <img className="image" src={img.img} alt={img.imgcap} />
                    )}
                    {img.imgcap && <p>{img.imgcap}</p>}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
