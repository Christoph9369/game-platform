import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenre();

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
                variant="link"
                fontSize="lg"
              >
                {genre.name}{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
