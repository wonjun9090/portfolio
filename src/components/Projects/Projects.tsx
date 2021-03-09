import React from 'react';
import styled from 'styled-components';
import TextBox from '../TextBox';
import Card from '../Card';


const ProjectsWrqpper = styled.div`
  background-color: rgb(28, 191, 123);
`


function Projects(): React.ReactElement {
  return (
    <ProjectsWrqpper>
      <TextBox>인사인사인사</TextBox>
      <div>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
        <Card ImgWidth="100%" ImgHeight="30%" TextWidth="100%" text="소개"/>
      </div>
    </ProjectsWrqpper>
  )
}


export default Projects