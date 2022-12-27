const Emoji = ({ symbol, label }: EmojiType) => (
	<span className="emoji" role="img" aria-label={label}>
		{symbol}
	</span>
);
export default Emoji;
