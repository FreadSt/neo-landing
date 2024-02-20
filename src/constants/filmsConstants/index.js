import maestroCard from '../../assets/images/maestro.png';
import oswald from '../../assets/images/oswald-card.png';
import burdenGuilt from '../../assets/images/burder-g-card.png';
import heroes from '../../assets/images/heroes-am-us-card.png';
import maestroPoster from '../../assets/images/maestro-poster.jpg';
import oswaldPoster from '../../assets/images/oswald-poster.jpg';
import guilt from '../../assets/images/burden-of-guilt-poster.jpg';
import heroesPoster from '../../assets/images/heroes-poster.jpg';

export const FILM_CARDS = [
  {
    img: maestroCard,
    title: 'the maestro',
    date: 'To be announced',
    backgroundStatic: '#151515',
    backgroundHover: '#1F1F1F',
    buttonText: 'Details',
    backgroundImg: maestroPoster,
    path: '/maestro-page',
    // starring: ['Floyd Miles', 'Kristin Watson', 'Esther Howard'],
    // createdBy: ['Marvin McKinney'],
    writtenBy: [' '],
    movieDes:
      'Et velit facilisis adipiscing sed scelerisque orci sit. Ultrices sem aliquam volutpat eget velit purus. Fringilla et amet tempor leo est proin feugiat. Egestas at eleifend sodales massa sed turpis dui. Ornare elementum orci ut tortor pellentesque sed nunc semper. Egestas sodales sit in ullamcorper nisi nisl nibh. Vel mauris bibendum semper aliquet amet nullam arcu dictumst ac. Volutpat elit ac arcu quis proin id risus donec blandit. Mattis in vestibulum a hendrerit risus.\n' +
      'Pellentesque nunc condimentum etiam cras. Mi sem commodo pharetra scelerisque ac cursus risus. Cursus sed est turpis nisl. Risus ipsum mattis leo tellus facilisi. Neque ipsum porttitor morbi volutpat. Facilisis elementum ullamcorper fames sit tortor eu.',
  },
  {
    img: oswald,
    title: 'Oswald',
    date: 'To be announced',
    backgroundStatic: '#151515',
    backgroundHover: '#1F1F1F',
    buttonText: 'Details',
    backgroundImg: oswaldPoster,
    path: '/oswald-page',
    // starring: [' ', '', ''],
    directedBy: [''],
    createdBy: ['Lilton Stewart III'],
    writtenBy: ['Lilton Stewart III'],
    movieDes:
      "Art and some of his friends get transported to a place shrouded by dark Hollywood Magic. They come across Oswald's come-to-life cartoon Rabbit and must work together to escape their magical prison before the Rabbit gets to them first.",
  },
  {
    img: burdenGuilt,
    title: 'Burden Of Guilt',
    date: 'To be announced',
    backgroundStatic: '#151515',
    backgroundHover: '#1F1F1F',
    buttonText: 'Details',
    backgroundImg: guilt,
    path: '/burdenGuilt-page',
    starring: ['Teala Stampley', 'Torean Thomas', 'Rosa Pill', 'Mariah Salae'],
    createdBy: [' '],
    writtenBy: [' '],
    movieDes:
      "Mallory and Tristan's grief over their son's loss drove them to a boiling point of hate for one another. They seek out Dr. Colburn to help resolve these dark feelings toward each other, hoping to save their marriage.",
  },
  {
    img: heroes,
    title: 'Heroes among us',
    date: 'To be announced',
    backgroundStatic: '#151515',
    backgroundHover: '#1F1F1F',
    buttonText: 'Details',
    backgroundImg: heroesPoster,
    path: '/heroes-among-us-page',
    starring: [' ', '', ''],
    createdBy: [' '],
    writtenBy: [' '],
    movieDes:
      'In the realm of cinematic prowess, emerges "Heroes Among Us," This upcoming series delves into the extraordinary journeys of three enigmatic superhero figures, each grappling with their own inner turmoil and external adversaries. As their individual narratives unfold in a labyrinth of intrigue and suspense, audiences are drawn into a riveting exploration of identity, sacrifice, and the blurred lines between heroism and humanity.',
  },
  // {
  //   img: finalshow,
  //   title: 'the final show',
  //   date: 'out now',
  //   backgroundStatic: '#151515',
  //   backgroundHover: '#1F1F1F',
  //   buttonText: 'Details',
  //   backgroundImg: noBg,
  //   path: '/finalshow-page',
  //   starring: [' ', '', ''],
  //   createdBy: ' ',
  // },
];
