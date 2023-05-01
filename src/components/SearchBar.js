'use client';

import { MenuItem, Select } from '@mui/material';
import Zoom from 'react-reveal/Zoom';

const SearchBar = ({tech, setTech}) => {
    return (
        <Zoom>
            <div className="px-2 min-w-[280px] sm:min-w-[400px] mb-2 md:mb-5 md:mt-2">
                <Select
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth
                    className="bg-white rounded-[11px] sm:rounded-[15px] max-w-[450px]"
                    sx={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.22)' }}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value="reactjs">Reactjs</MenuItem>
                    <MenuItem value="nextjs">Nextjs</MenuItem>
                    <MenuItem value="mern">MERN</MenuItem>
                    <MenuItem value="mysql">Mysql</MenuItem>
                    <MenuItem value="full-stack">Full Stack</MenuItem>
                    <MenuItem value="redux">Redux</MenuItem>
                    <MenuItem value="typescript">Typescript</MenuItem>
                    <MenuItem value="javascript">Vanilla Javascript</MenuItem>
                    <MenuItem value="material-ui">Material UI</MenuItem>
                    <MenuItem value="chakra-ui">Chakra UI</MenuItem>
                    <MenuItem value="tailwind-css">Tailwind css</MenuItem>
                    <MenuItem value="animation">Animation</MenuItem>
                    <MenuItem value="bootstrap">Bootstrap</MenuItem>
                    <MenuItem value="module-css">Module css</MenuItem>
                    <MenuItem value="css">Plain css</MenuItem>
                    <MenuItem value="formik">Formik</MenuItem>
                    <MenuItem value="clone">Clone</MenuItem>
                    <MenuItem value="e-commerce">E-commerce</MenuItem>
                </Select>
            </div>
        </Zoom>
    );
};

export default SearchBar;