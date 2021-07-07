import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Button, Container} from "@material-ui/core"
//import "./NewsCard.css"

const useStyles = makeStyles((theme) => ({
          root: {
            flexGrow: 1,
            
          },

          paper: {
            padding: "10px 5px",
            textAlign: 'center',
            color: theme.palette.text.secondary,
            marginBottom: "3rem",
            height: "80%",
            transition: "transform .5s ease",

            "&:hover": {
                      transform: "translateY(5px)"
            }
          },

          image: {
                    height: "11 rem",
                    width: "100%",
                    borderRadius: "5px",
                    transition: "transform .7s ease",

                    '&:hover': {
                              transform: "scale(.8)"
                    }
          },

          button: {
                    transition: "all .4s ease",
                    '&:hover': {
                              backgroundColor: "#ede0d4",
                              
                              transform: "translateY(-6px)",
                              fontWeight: "700",
                              marginBottom: "5px"
                            },
          },

          link: {
                    color: "#ddbea9",
                    textDecoration: "none"
          },

          
          
        }));


        
        const NewsCard = ({articles}) => {
          const classes = useStyles();
          
          const renderCart = () => (
                    <>
                    <div className={classes.root}> 
                      <Grid container spacing={4}>
                        {articles.map((article) => (
                          <Grid item xs={3} md={4} sm={2}  key={article.title} className={classes.content}>
                                    <Paper className={classes.paper}>
                                              <img src={article.image} alt={article.title} className={classes.image}/>
                                              <h3>{article.title}</h3>
                                              
                                              <Button className={classes.button}>
                                              <a href={article.url} className={classes.link}>Read Article &rarr;</a>
                                              </Button>
                                              
                                             

                                    </Paper>
                            
                          </Grid>
                        ))}
                      </Grid>
                      </div>

                      </>)
          return (
                    <Container>
                               {renderCart()}

                    </Container>
                             
                              
                    
          )
}        

export default NewsCard
