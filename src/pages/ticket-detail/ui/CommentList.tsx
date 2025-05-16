import { Comment } from '../../../shared/api/types';

export default function CommentList({
  comments,
}: {
  comments: Comment[];
}) {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
}
