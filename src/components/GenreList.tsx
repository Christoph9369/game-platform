import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenreList = () => {
  const { data, isLoading } = useGenre();

  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;