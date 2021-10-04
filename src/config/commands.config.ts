import { ApplicationCommand, OptionType } from '@models/command';

const config: ApplicationCommand[] = [
	{
		name: 'help',
		description: 'Get information about a command or show a general list of commands.',
		options: [
			{
				name: 'page',
				description: 'Show a certain page in the list',
				required: false,
				type: OptionType.NUMBER,
			},
			{
				name: 'command',
				description: 'Search for a specific command',
				required: false,
				type: OptionType.STRING,
			},
		],
	},
	{
		name: 'play',
		description: 'Play a song in your current voice channel.',
		options: [
			{
				name: 'platform',
				description: 'The platform to find the song on',
				required: false,
				type: OptionType.STRING,
				choices: [
					{
						name: 'Soundcloud',
						value: 'soundcloud',
					},
					{
						name: 'Spotify',
						value: 'spotify',
					},
				],
			},
			{
				name: 'url',
				description: 'The songs url',
				required: false,
				type: OptionType.STRING,
			},
			{
				name: 'keywords',
				description: 'Keywords to search for a song',
				required: false,
				type: OptionType.STRING,
			},
		],
	},
];

export default config;
