import './CastCard.css'
const CastCard = ({ index,castMember }) => {
    return (
        
      <div key={index} className="cast-card">
        <div className="cast-photo">
          <img
          src={castMember.profile_path?`https://image.tmdb.org/t/p/w500${castMember.profile_path}`:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///+utLewtrqrsbSor7Ll5+j19vbh4+Tv8PHJzc+lrK+3vL/V2NqyuLu+w8X8/PzO0dPq6+zx8vO7wcPZ3N3Dx8rKzs9bqYtdAAAFRklEQVR4nO2d2bqrIAyFNwWHOuHY93/Uo61uW3cHgaQET/7b3ri+QBKm1Z8fhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEOidZx20RJEkVprLXvr4FGp3UlM6XkFaUy1dXNcVS2yTlXUmyQqjz3qe9vg6AZ1F95s0gpq8j397lSjAPzubxFpDr7/kYHdCLeyptFij7UGdmU6rO+WyCDHKu63qnvqvES+/5eY9JyxwANOYxFZqJvIht8f7MRZ4MRuqCGcEaqzo1G6IIsQ5EYm03Be42N72/fRbynCL7g1Pr++h1oa3kTKoDibz1EZ8g344OjQFn5VvCBwqJMbCTS7sQbxwhOKMrdjS7dBY7dDeGE6joJZ3LfOl6SOE/CG7L3reQVJxiBI0Sr4gVmjI7I2reWp7g1M48oknW/AAvhGESKi8UYUOAokeBC6gyrkGAQQYr9SkZuJqZAtXBBFr4VbclhBdJrbFLjvbVPUNvRgCwVs0Jiq6gKXCGxYQrZz/xCqiRGwJl0QpGaiLDl/gatiQheKyYoTUSNojAjNBFjuLXvHSrxrWulRUg0tNbBDYpCQSjV9AiplNYKCqNYjBDa4AfaJ91CqFxUKAJF6VvXSoej8ORb1wqSQuFb1wortITQKD1+pjl+tTh+xT9+13b8zjvFiSGh1dPxV8DH38XA2YkqKZ3mH383MUJQSGtHGGVXn9bVKITOlFDPNoFwukaoo5loDn9CevxTbvDzNUot28zhb5v81Ie/MQR760tR6kkXQG/uEVrer4DevqRWKm7Atd+0mu474NIppXXTPT3UTXZ6tXDh8K8RoF6U0Cv2KxDjlO5riyvunQ3FbuYB10uKsqOaR39xeCM7QflZ14z9O+drCCn2o1taF4k0u7Ut9lHMwhA4SrRzHBAl5UK4wUailPSTzB0m1i03gvMaigzdWwTtTuYZujMIo8pDqBJ/2B1GmRE6CzWjOO1ywiL3iMuEQrwya5vlKXHx/Y2OxMn5tUaphiTICbghLgaRPXEVlEMdVAV8T1xUcjGGnKwhVVcE1MDsJW6SpB9JkugIQ5M5FHqynu2L+lx1XZ7nXVcNl2Icq00b/GDVTTGcsixbMsyaR3+9aDPVXZKY/NbMX8aw9ef8pTXrpmxkYqiTNJyA6jQZhPrgzLpVOQU0r5sAVLZFXkojcQ/RFOVA2SXqp+2fOCKbomRNVGRcSHd5V6TMqoha8onrDkjejKI1XNPadua9Qao8IRLI6ISg7yZSnAkk12iv4bOdRlX71ah7ganvqjGrPGqsUeP3q1FWnpaSjatT6X5U4SHnuB2imSK/bqqkbeysnRhrxzcFplj14R3ZF8OI9BjvE7L8UpvT7NnIxuE751M1+J11AyT+vdO48xbAGeSEY3t+DQhu3Yh85NA/EhHvD7ubdYMg0Y5Tzc/msUC6V/T1NuYdGL04kquALfASiQmE91L21Ki9A/Z0FfbJDxCQ6QbqEj4sOdyyGOMdMwCApZ+mwGlzA0af5b83fQOgP/sgmWVmQP4DC8NeFgyQqQj8+hUY6b5cpDxGJ5xfL0Q+9yx24TpOsbzm4HB0JoD6bxxM3FzdUNyRgHEqikTbtQ0uDzJRzJHAcWjeQpiFE521QiTDR3CUbU3U5Gvhgm1NpN7OrNg6uwUTQtudfhxDSxzsck04g1RY2kzQXjY9YrWIgnXUwcYmm4ZS7m/YdG4I/2+EiM2GTRg96YLNG+KwFFosoXCMc9GwMO1pfX+zGRaOKND/Z4iNeVfTiPJEiXLkzW8nUqbDDMMwDMMwDMMwDMMwzP/IPxrMVPfzXT/RAAAAAElFTkSuQmCC'} 
           
            alt={castMember.name}
          />
        </div>
        <div className="cast-info">
          <p>{castMember.name} </p>
          <p className="character-name">Character: {castMember.character}</p>
        </div>
      </div>
      
    );
  };
  
  export default CastCard;
  