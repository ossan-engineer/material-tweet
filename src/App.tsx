import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { red } from '@material-ui/core/colors';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';

interface OtherAction {
  label: string;
  handler: () => void;
}

interface TweetProps {
  name: string;
  date: Date;
  otherActions?: OtherAction[];
  text: string;
  actions: {
    comment?: {
      count: number;
      handler: () => void;
    };
    like?: {
      count: number;
      handler: () => void;
    };
    retweet?: {
      count: number;
      handler: () => void;
    };
    share?: {
      count: number;
      handler: () => void;
    };
  };
}

const StyledAvatar = styled(Avatar)`
  background-color: ${red[500]};
`;

const Count = styled.div`
  margin-right: 5px;
`;

const App = ({ name, date, otherActions, text, actions }: TweetProps) => {
  const defaultTheme = createMuiTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <Card>
          <CardHeader
            avatar={
              <StyledAvatar aria-label="recipe">
                {name.slice(0, 1)}
              </StyledAvatar>
            }
            action={
              otherActions &&
              otherActions.length > 0 && (
                <IconButton
                  aria-label="other-actions"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <ExpandMoreIcon />
                </IconButton>
              )
            }
            title={name}
            subheader={moment(date).fromNow()}
          />
          <CardContent>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {otherActions &&
                otherActions.map(({ label, handler }) => (
                  <MenuItem
                    key={label}
                    onClick={() => {
                      handler();
                      handleClose();
                    }}
                  >
                    {label}
                  </MenuItem>
                ))}
            </Menu>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {actions.comment && (
              <>
                <IconButton
                  aria-label="comment"
                  onClick={actions.comment.handler}
                >
                  <ModeCommentOutlinedIcon />
                </IconButton>
                {actions.comment.count > 0 && (
                  <Count>{actions.comment.count}</Count>
                )}
              </>
            )}
            {actions.retweet && (
              <>
                <IconButton
                  aria-label="retweet"
                  onClick={actions.retweet.handler}
                >
                  <RepeatOutlinedIcon />
                </IconButton>
                {actions.retweet.count > 0 && (
                  <Count>{actions.retweet.count}</Count>
                )}{' '}
              </>
            )}
            {actions.like && (
              <>
                <IconButton
                  aria-label="add to favorites"
                  onClick={actions.like.handler}
                >
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                {actions.like.count > 0 && <Count>{actions.like.count}</Count>}{' '}
              </>
            )}
            {actions.share && (
              <>
                <IconButton aria-label="share" onClick={actions.share.handler}>
                  <ShareOutlinedIcon />
                </IconButton>
                {actions.share.count > 0 && (
                  <Count>{actions.share.count}</Count>
                )}{' '}
              </>
            )}
          </CardActions>
        </Card>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
