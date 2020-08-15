import React, {useState} from 'react';
import {Grid, Toolbar, Paper, InputBase, IconButton} from '@material-ui/core';
import {data} from './data';
import LayoutCard from './LayoutCard';
import {makeStyles} from "@material-ui/styles";
import SearchIcon from '@material-ui/icons/Search'; 

const useStyles = makeStyles(() => ({
    typographyStyle: {
        flex: 1
    },
    input: {
        marginLeft: 1,
        flex: 1,
        padding: 3,
      },
      iconButton: {
        padding: 10,
      },
}))

const Layout = () => {
    const [Datas, setDatas] = useState(data);
    const [searchField, setSearchField] = useState("")

    const classes = useStyles();

    const filteredData = Datas.filter(data => 
        data.title.toLowerCase().includes(searchField.toLowerCase())    
    );

    const deleteItem = (id) => {
        const filterItem = Datas.filter(data => 
            data.id !== id
        )
        setDatas(filterItem);
    }
    
    return (
        <Grid container>
            <Grid item>
                <Toolbar>
                    <Paper>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Your Card"
                        onChange={e=>setSearchField(e.target.value)}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                    </IconButton>
                    </Paper>
                </Toolbar>
               <hr/>
            </Grid> 
            <Grid container spacing={4} >
               {filteredData.map(item => (
                <Grid item xs={12} sm={4}>
                    <LayoutCard item={item} deleteItem={deleteItem}/>
                </Grid>
                ))} 
            </Grid>
        </Grid>
    )
}

export default Layout;
