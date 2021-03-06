import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const FilesIndesignIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path d="M20.5 8H15c-.4 0-.777.156-1.083.463l-3.478 3.968c-.283.283-.439.66-.439 1.06V22.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zm-6.514 1.9V13h-2.718l2.718-3.1zM21 22.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V14h3.986V9.003c.005 0 .01-.003.014-.003h5.5a.5.5 0 0 1 .5.5v13zM18.03 16h-.626v1.531h-.01c-.111-.2-.355-.355-.695-.355-.595 0-1.113.538-1.108 1.443 0 .832.468 1.381 1.057 1.381.36 0 .66-.189.807-.488h.01l.026.427h.559c-.01-.183-.02-.483-.02-.76V16zm-.626 2.768a.825.825 0 0 1-.02.2c-.06.294-.284.483-.538.483-.396 0-.62-.36-.62-.855 0-.504.224-.893.625-.893.284 0 .482.217.538.483.01.055.015.122.015.177v.405z" />
        <path d="M14.375 16.2h.682v3.739h-.682z" />
      </g>
    </svg>
  ),
  displayName: 'FilesIndesignIcon',
});

export default FilesIndesignIcon;
