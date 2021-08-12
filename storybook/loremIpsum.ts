/* eslint-disable max-len, quotes */
const loremIpsumParagraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius sit amet mattis. Fermentum leo vel orci porta non pulvinar. Vulputate ut pharetra sit amet aliquam id diam maecenas. Nibh tellus molestie nunc non blandit massa enim nec dui. Turpis in eu mi bibendum neque egestas congue. Sed nisi lacus sed viverra tellus in. Nisl nunc mi ipsum faucibus vitae aliquet nec. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Quisque non tellus orci ac auctor. Eget arcu dictum varius duis at consectetur lorem donec massa. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Integer malesuada nunc vel risus. Erat nam at lectus urna duis convallis. Velit ut tortor pretium viverra. Quam vulputate dignissim suspendisse in. In nisl nisi scelerisque eu ultrices vitae.',
  'Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Non curabitur gravida arcu ac. Amet purus gravida quis blandit turpis cursus. In cursus turpis massa tincidunt dui. Quam viverra orci sagittis eu. Sit amet nulla facilisi morbi tempus iaculis. Dui accumsan sit amet nulla facilisi morbi tempus. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Nunc pulvinar sapien et ligula. Laoreet non curabitur gravida arcu ac tortor dignissim. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque.',
  'Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. In cursus turpis massa tincidunt dui ut ornare lectus sit. Ut consequat semper viverra nam libero. Libero id faucibus nisl tincidunt eget nullam. Adipiscing elit ut aliquam purus sit amet. Enim tortor at auctor urna nunc id cursus metus aliquam. Amet commodo nulla facilisi nullam. Blandit aliquam etiam erat velit scelerisque in. Magna eget est lorem ipsum dolor sit amet consectetur. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. At in tellus integer feugiat scelerisque varius. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Malesuada fames ac turpis egestas sed tempus.',
  'Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ornare massa eget egestas purus. Habitant morbi tristique senectus et. Est ante in nibh mauris cursus mattis. Enim praesent elementum facilisis leo. Imperdiet dui accumsan sit amet nulla facilisi. Amet volutpat consequat mauris nunc congue. Nisl vel pretium lectus quam id. Commodo ullamcorper a lacus vestibulum. Scelerisque in dictum non consectetur a. Rutrum quisque non tellus orci. Vitae elementum curabitur vitae nunc. Mattis molestie a iaculis at erat pellentesque adipiscing.',
  'Aliquet eget sit amet tellus cras adipiscing. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tristique senectus et netus et malesuada fames ac. Nisi porta lorem mollis aliquam. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Urna duis convallis convallis tellus id interdum. Tellus elementum sagittis vitae et leo. Sit amet facilisis magna etiam tempor. Viverra tellus in hac habitasse platea dictumst. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. In ornare quam viverra orci. Non nisi est sit amet facilisis magna. Tincidunt eget nullam non nisi est sit amet facilisis. Auctor eu augue ut lectus arcu bibendum. Aenean et tortor at risus viverra adipiscing at. Ut venenatis tellus in metus. Mauris in aliquam sem fringilla ut morbi tincidunt.',
];
const glue = `\n\n`;

export const loremIpsumSmall = loremIpsumParagraphs.slice(0, 2).join(glue);
export const loremIpsumMedium = loremIpsumParagraphs.slice(0, 3).join(glue);
export const loremIpsumLarge = loremIpsumParagraphs.join(glue);

export default loremIpsumParagraphs[0];
